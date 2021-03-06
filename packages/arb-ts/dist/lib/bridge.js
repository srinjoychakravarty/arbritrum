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
exports.Bridge = void 0;
const ethers_1 = require("ethers");
const l1Bridge_1 = require("./l1Bridge");
const l2Bridge_1 = require("./l2Bridge");
const bridge_helpers_1 = require("./bridge_helpers");
const { Zero } = ethers_1.constants;
/**
 * Main class for accessing token bridge methods; inherits methods from {@link L1Bridge} and {@link L2Bridge}
 */
class Bridge extends l2Bridge_1.L2Bridge {
    constructor(erc20BridgeAddress, arbERC20BridgeAddress, ethSigner, arbSigner) {
        Promise.all([ethSigner.getAddress(), arbSigner.getAddress()]).then(([ethSignerAddress, arbSignerAddress]) => {
            if (ethSignerAddress !== arbSignerAddress) {
                throw new Error('L1 & L2 wallets must be of the same address');
            }
        });
        super(arbERC20BridgeAddress, arbSigner);
        this.l1Bridge = new l1Bridge_1.L1Bridge(erc20BridgeAddress, ethSigner);
    }
    updateAllBalances() {
        this.updateAllTokens();
        this.getAndUpdateL1EthBalance();
        this.getAndUpdateL2EthBalance();
    }
    /**
     * Update state of all tracked tokens (balance, allowance), etc. and returns state
     */
    async updateAllTokens() {
        const l1Tokens = await this.l1Bridge.updateAllL1Tokens();
        const l2Tokens = await this.updateAllL2Tokens();
        return { l1Tokens, l2Tokens };
    }
    /**
     * Update target token (balance, allowance), etc. and state
     */
    async updateTokenData(erc20l1Address) {
        const l1Data = await this.getAndUpdateL1TokenData(erc20l1Address);
        const l2Data = await this.getAndUpdateL2TokenData(erc20l1Address);
        return { l1Data, l2Data };
    }
    get l1Tokens() {
        return this.l1Bridge.l1Tokens;
    }
    get l1EthBalance() {
        return this.l1Bridge.l1EthBalance;
    }
    get ethERC20Bridge() {
        return this.l1Bridge.ethERC20Bridge;
    }
    /**
     * Set allowance for L1 bridge contract
     */
    async approveToken(erc20L1Address, overrides) {
        return this.l1Bridge.approveToken(erc20L1Address, overrides);
    }
    /**
     * Deposit ether from L1 to L2. Users L1MessageType_L2FundedByL1 txn type ( type 7)
     */
    async depositETH(value, destinationAddress, maxGas = ethers_1.BigNumber.from(3000000), _gasPriceBid, overrides) {
        const gasPriceBid = _gasPriceBid || (await this.l2Provider.getGasPrice());
        return this.l1Bridge.depositETH(value, destinationAddress, maxGas, gasPriceBid, overrides);
    }
    /**
     * Token deposit; if no value given, calculates and includes minimum necessary value to fund L2 side of execution
     */
    async deposit(erc20L1Address, amount, retryableGasArgs = {}, destinationAddress, overrides) {
        const gasPriceBid = retryableGasArgs.gasPriceBid || (await this.l2Provider.getGasPrice());
        const sender = await this.l1Bridge.l1Signer.getAddress();
        const [isDeployed, depositCalldata,] = await this.ethERC20Bridge.getDepositCalldata(erc20L1Address, sender, destinationAddress ? destinationAddress : sender, amount, '0x');
        const expectedGas = await this.l2Provider.estimateGas({
            from: this.ethERC20Bridge.address,
            to: this.arbTokenBridge.address,
            data: depositCalldata,
        });
        const maxGas = retryableGasArgs.maxGas || expectedGas;
        const maxSubmissionPriceIncreaseRatio = retryableGasArgs.maxSubmissionPriceIncreaseRatio || ethers_1.BigNumber.from(13);
        const maxSubmissionPrice = (await this.getTxnSubmissionPrice(depositCalldata.length - 2))[0]
            .mul(maxSubmissionPriceIncreaseRatio)
            .div(ethers_1.BigNumber.from(10));
        // calculate required forwarding gas
        let ethDeposit = overrides && (await overrides.value);
        if (!ethDeposit || ethers_1.BigNumber.from(ethDeposit).isZero()) {
            ethDeposit = await maxSubmissionPrice.add(gasPriceBid.mul(maxGas));
            // TODO: might reactivate if we switch to arb-os deducting from sender's EOA
            // const l2Balance = await this.getAndUpdateL2EthBalance()
            // const requiredEth = await maxSubmissionPrice.add(gasPriceBid.mul(maxGas))
            // if (l2Balance.lt(requiredEth)) {
            //   console.info(
            //     'insufficient L2 balance to pay for retryable:',
            //     l2Balance.toNumber(),
            //     'Depositing additional ETH'
            //   )
            //   ethDeposit = requiredEth.sub(l2Balance)
            // } else {
            //   console.info('l2 account adequately funded for retryable')
            // }
        }
        return this.l1Bridge.deposit(erc20L1Address, amount, maxSubmissionPrice, maxGas, gasPriceBid, destinationAddress, Object.assign(Object.assign({}, overrides), { value: ethDeposit }));
    }
    getAndUpdateL1TokenData(erc20l1Address) {
        return this.l1Bridge.getAndUpdateL1TokenData(erc20l1Address);
    }
    async getAndUpdateL1EthBalance() {
        return this.l1Bridge.getAndUpdateL1EthBalance();
    }
    getL2Transaction(l2TransactionHash) {
        return bridge_helpers_1.BridgeHelper.getL2Transaction(l2TransactionHash, this.l2Provider);
    }
    getL1Transaction(l1TransactionHash) {
        return bridge_helpers_1.BridgeHelper.getL1Transaction(l1TransactionHash, this.l1Bridge.l1Provider);
    }
    /**
     * get hash of regular L2 txn from corresponding inbox sequence number
     */
    calculateL2TransactionHash(inboxSequenceNumber, l2ChainId) {
        return bridge_helpers_1.BridgeHelper.calculateL2TransactionHash(inboxSequenceNumber, l2ChainId || this.l2Provider);
    }
    /**
     * Hash of L2 side of retryable txn; txn gets generated automatically and is formatted as tho user submitted
     */
    calculateL2RetryableTransactionHash(inboxSequenceNumber, l2ChainId) {
        return bridge_helpers_1.BridgeHelper.calculateL2RetryableTransactionHash(inboxSequenceNumber, l2ChainId || this.l2Provider);
    }
    /**
     * Hash of L2 ArbOs generated "auto-redeem" transaction; if it succeeded, a transaction queryable by {@link calculateL2RetryableTransactionHash} will then be created
     */
    calculateRetryableAutoReedemTxnHash(inboxSequenceNumber, l2ChainId) {
        return bridge_helpers_1.BridgeHelper.calculateRetryableAutoReedemTxnHash(inboxSequenceNumber, l2ChainId || this.l2Provider);
    }
    async getInboxSeqNumFromContractTransaction(l1Transaction) {
        return bridge_helpers_1.BridgeHelper.getInboxSeqNumFromContractTransaction(l1Transaction, 
        // TODO: we don't need to actually make this query if random address fetches interface
        (await this.l1Bridge.getInbox()).address);
    }
    /**
     * Convenience method to directly retrieve retryable hash from an l1 transaction
     */
    async getL2TxHashByRetryableTicket(l1Transaction) {
        if (typeof l1Transaction == 'string') {
            l1Transaction = await this.getL1Transaction(l1Transaction);
        }
        const inboxSeqNum = await this.getInboxSeqNumFromContractTransaction(l1Transaction);
        if (!inboxSeqNum)
            throw new Error('Inbox not triggered');
        return this.calculateL2RetryableTransactionHash(inboxSeqNum[0]);
    }
    getBuddyDeployInL2Transaction(l2Transaction) {
        return bridge_helpers_1.BridgeHelper.getBuddyDeployInL2Transaction(l2Transaction);
    }
    getWithdrawalsInL2Transaction(l2Transaction) {
        return bridge_helpers_1.BridgeHelper.getWithdrawalsInL2Transaction(l2Transaction, this.l2Provider);
    }
    getDepositTokenEventData(l1Transaction) {
        return bridge_helpers_1.BridgeHelper.getDepositTokenEventData(l1Transaction, this.arbTokenBridge.address);
    }
    /**
     * Attempt to execute an outbox message; must be confirmed to succeed (i.e., confirmation delay must have passed)
     */
    async triggerL2ToL1Transaction(batchNumber, indexInBatch, singleAttempt = false) {
        const inbox = await this.l1Bridge.getInbox();
        const bridgeAddress = await inbox.bridge();
        return bridge_helpers_1.BridgeHelper.triggerL2ToL1Transaction(batchNumber, indexInBatch, bridgeAddress, this.l2Provider, this.l1Bridge.l1Signer, singleAttempt);
    }
    tryOutboxExecute(activeOutboxAddress, batchNumber, proof, path, l2Sender, l1Dest, l2Block, l1Block, timestamp, amount, calldataForL1) {
        return bridge_helpers_1.BridgeHelper.tryOutboxExecute({
            batchNumber,
            proof,
            path,
            l2Sender,
            l1Dest,
            l2Block,
            l1Block,
            timestamp,
            amount,
            calldataForL1,
        }, activeOutboxAddress, this.l1Bridge.l1Signer);
    }
    tryGetProofOnce(batchNumber, indexInBatch) {
        return bridge_helpers_1.BridgeHelper.tryGetProofOnce(batchNumber, indexInBatch, this.l2Provider);
    }
    tryGetProof(batchNumber, indexInBatch, retryDelay = 500) {
        return bridge_helpers_1.BridgeHelper.tryGetProof(batchNumber, indexInBatch, this.l2Provider, retryDelay);
    }
    waitUntilOutboxEntryCreated(batchNumber, activeOutboxAddress) {
        return bridge_helpers_1.BridgeHelper.waitUntilOutboxEntryCreated(batchNumber, activeOutboxAddress, this.l1Bridge.l1Provider);
    }
    /**
     * Return receipt of retryable transaction after execution
     */
    async waitForRetriableReceipt(seqNum) {
        return bridge_helpers_1.BridgeHelper.waitForRetriableReceipt(seqNum, this.l2Provider);
    }
    async getTokenWithdrawEventData(destinationAddress) {
        return bridge_helpers_1.BridgeHelper.getTokenWithdrawEventData(destinationAddress, this.arbTokenBridge.address, this.l2Provider);
    }
    async getL2ToL1EventData(destinationAddress) {
        return bridge_helpers_1.BridgeHelper.getL2ToL1EventData(destinationAddress, this.l2Provider);
    }
    async getOutboxAddress() {
        if (this.outboxAddressCache) {
            return this.outboxAddressCache;
        }
        const inboxAddress = (await this.l1Bridge.getInbox()).address;
        const coreBridgeAddress = await bridge_helpers_1.BridgeHelper.getCoreBridgeFromInbox(inboxAddress, this.l1Bridge.l1Provider);
        const outboxAddress = await bridge_helpers_1.BridgeHelper.getActiveOutbox(coreBridgeAddress, this.l1Bridge.l1Provider);
        this.outboxAddressCache = outboxAddress;
        return outboxAddress;
    }
    /**
     * Returns {@link OutgoingMessageState} for given outgoing message
     */
    async getOutGoingMessageState(batchNumber, indexInBatch) {
        const outboxAddress = await this.getOutboxAddress();
        return bridge_helpers_1.BridgeHelper.getOutgoingMessageState(batchNumber, indexInBatch, outboxAddress, this.l1Bridge.l1Provider, this.l2Provider);
    }
}
exports.Bridge = Bridge;
