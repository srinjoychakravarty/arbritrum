import { Signer, BigNumber, providers } from 'ethers';
import { EthERC20Bridge } from './abi/EthERC20Bridge';
import { Inbox } from './abi/Inbox';
import { ERC20 } from './abi/ERC20';
import { PayableOverrides } from '@ethersproject/contracts';
export interface L1TokenData {
    ERC20?: {
        contract: ERC20;
        balance: BigNumber;
        allowed: boolean;
        symbol: string;
        decimals: number;
        name: string;
    };
    CUSTOM?: {
        contract: ERC20;
        balance: BigNumber;
        allowed: boolean;
        symbol: string;
    };
}
export interface Tokens {
    [contractAddress: string]: L1TokenData | undefined;
}
/**
 * L1 side only of {@link Bridge}
 */
export declare class L1Bridge {
    l1Signer: Signer;
    ethERC20Bridge: EthERC20Bridge;
    walletAddressCache?: string;
    inboxCached?: Inbox;
    l1Tokens: Tokens;
    l1Provider: providers.Provider;
    l1EthBalance: BigNumber;
    constructor(erc20BridgeAddress: string, l1Signer: Signer);
    updateAllL1Tokens(): Promise<Tokens>;
    getAndUpdateL1TokenData(erc20L1Address: string): Promise<L1TokenData>;
    depositETH(value: BigNumber, destinationAddress?: string, maxGas?: BigNumber, gasPriceBid?: BigNumber, overrides?: PayableOverrides): Promise<import("ethers").ContractTransaction>;
    approveToken(erc20L1Address: string, overrides?: PayableOverrides): Promise<import("ethers").ContractTransaction>;
    getDepositCallDataLength(erc20L1Address: string, amount: BigNumber, maxGas: BigNumber, gasPriceBid: BigNumber, destinationAddress?: string, overrides?: PayableOverrides): Promise<BigNumber>;
    deposit(erc20L1Address: string, amount: BigNumber, maxSubmissionCost: BigNumber, maxGas: BigNumber, gasPriceBid: BigNumber, destinationAddress?: string, overrides?: PayableOverrides): Promise<import("ethers").ContractTransaction>;
    getWalletAddress(): Promise<string>;
    getInbox(): Promise<Inbox>;
    getAndUpdateL1EthBalance(): Promise<BigNumber>;
}
