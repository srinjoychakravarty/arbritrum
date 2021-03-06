/*
 * Copyright 2021, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-env node */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.L1Bridge = void 0;
const ethers_1 = require("ethers");
const EthERC20Bridge__factory_1 = require("./abi/factories/EthERC20Bridge__factory");
const Inbox__factory_1 = require("./abi/factories/Inbox__factory");
const ERC20__factory_1 = require("./abi/factories/ERC20__factory");
const bridge_helpers_1 = require("./bridge_helpers");
const MIN_APPROVAL = ethers_1.constants.MaxUint256;
/**
 * L1 side only of {@link Bridge}
 */
class L1Bridge {
    constructor(erc20BridgeAddress, l1Signer) {
        this.l1Signer = l1Signer;
        this.l1Tokens = {};
        const l1Provider = l1Signer.provider;
        if (l1Provider === undefined) {
            throw new Error('Signer must be connected to an Ethereum provider');
        }
        this.l1Provider = l1Provider;
        this.ethERC20Bridge = EthERC20Bridge__factory_1.EthERC20Bridge__factory.connect(erc20BridgeAddress, l1Signer);
        this.l1EthBalance = ethers_1.BigNumber.from(0);
    }
    async updateAllL1Tokens() {
        for (const l1Address in this.l1Tokens) {
            await this.getAndUpdateL1TokenData(l1Address);
        }
        return this.l1Tokens;
    }
    async getAndUpdateL1TokenData(erc20L1Address) {
        const tokenData = this.l1Tokens[erc20L1Address] || {
            ERC20: undefined,
            CUSTOM: undefined,
        };
        this.l1Tokens[erc20L1Address] = tokenData;
        const walletAddress = await this.getWalletAddress();
        if (!tokenData.ERC20) {
            if ((await this.l1Provider.getCode(erc20L1Address)).length > 2) {
                // If this will throw if not an ERC20, which is what we *want*.
                const ethERC20TokenContract = await ERC20__factory_1.ERC20__factory.connect(erc20L1Address, this.l1Signer);
                const [balance] = await ethERC20TokenContract.functions.balanceOf(walletAddress);
                const [allowance] = await ethERC20TokenContract.functions.allowance(walletAddress, this.ethERC20Bridge.address);
                // non-standard
                const symbol = await ethERC20TokenContract.functions
                    .symbol()
                    .then(([res]) => res)
                    .catch(_ => bridge_helpers_1.addressToSymbol(erc20L1Address));
                const decimals = await ethERC20TokenContract.functions
                    .decimals()
                    .then(([res]) => res)
                    .catch(_ => 18);
                const name = await ethERC20TokenContract.functions
                    .name()
                    .then(([res]) => res)
                    .catch(_ => symbol + '_Token');
                const allowed = await allowance.gte(MIN_APPROVAL.div(2));
                tokenData.ERC20 = {
                    contract: ethERC20TokenContract,
                    balance,
                    allowed,
                    symbol,
                    decimals,
                    name,
                };
            }
            else {
                throw new Error(`No ERC20 at ${erc20L1Address} `);
            }
        }
        else {
            const ethERC20TokenContract = await ERC20__factory_1.ERC20__factory.connect(erc20L1Address, this.l1Signer);
            const [balance] = await ethERC20TokenContract.functions.balanceOf(walletAddress);
            tokenData.ERC20.balance = balance;
            if (!tokenData.ERC20.allowed) {
                const [allowance] = await ethERC20TokenContract.functions.allowance(walletAddress, this.ethERC20Bridge.address);
                tokenData.ERC20.allowed = allowance.gte(MIN_APPROVAL.div(2));
            }
        }
        return tokenData;
    }
    async depositETH(value, destinationAddress, maxGas = ethers_1.BigNumber.from(3000000), gasPriceBid = ethers_1.BigNumber.from(0), overrides = {}) {
        const address = destinationAddress || (await this.getWalletAddress());
        const inbox = await this.getInbox();
        return inbox.functions.sendL1FundedContractTransaction(maxGas, gasPriceBid, address, '0x', Object.assign({ value }, overrides));
    }
    async approveToken(erc20L1Address, overrides = {}) {
        const tokenData = await this.getAndUpdateL1TokenData(erc20L1Address);
        if (!tokenData.ERC20) {
            throw new Error(`Can't approve; token ${erc20L1Address} not found`);
        }
        return tokenData.ERC20.contract.functions.approve(this.ethERC20Bridge.address, MIN_APPROVAL, overrides);
    }
    async getDepositCallDataLength(erc20L1Address, amount, maxGas, gasPriceBid, destinationAddress, overrides = {}) {
        const destination = destinationAddress || (await this.getWalletAddress());
        const tokenData = await this.getAndUpdateL1TokenData(erc20L1Address);
        if (!tokenData.ERC20) {
            throw new Error(`Can't deposit; No ERC20 at ${erc20L1Address}`);
        }
        const [seqNum, len] = await this.ethERC20Bridge.callStatic.deposit(erc20L1Address, destination, amount, 0, maxGas, gasPriceBid, '0x', overrides);
        return len;
    }
    async deposit(erc20L1Address, amount, maxSubmissionCost, maxGas, gasPriceBid, destinationAddress, overrides = {}) {
        const destination = destinationAddress || (await this.getWalletAddress());
        const tokenData = await this.getAndUpdateL1TokenData(erc20L1Address);
        if (!tokenData.ERC20) {
            throw new Error(`Can't deposit; No ERC20 at ${erc20L1Address}`);
        }
        return this.ethERC20Bridge.functions.deposit(erc20L1Address, destination, amount, maxSubmissionCost, maxGas, gasPriceBid, '0x', overrides);
    }
    async getWalletAddress() {
        if (this.walletAddressCache) {
            return this.walletAddressCache;
        }
        this.walletAddressCache = await this.l1Signer.getAddress();
        return this.walletAddressCache;
    }
    async getInbox() {
        if (this.inboxCached) {
            return this.inboxCached;
        }
        const inboxAddress = await this.ethERC20Bridge.inbox();
        this.inboxCached = Inbox__factory_1.Inbox__factory.connect(inboxAddress, this.l1Signer);
        return this.inboxCached;
    }
    async getAndUpdateL1EthBalance() {
        const bal = await this.l1Signer.getBalance();
        this.l1EthBalance = bal;
        return bal;
    }
}
exports.L1Bridge = L1Bridge;
