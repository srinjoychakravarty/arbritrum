import { Signer, BigNumber, providers, ethers } from 'ethers';
import { ArbTokenBridge } from './abi/ArbTokenBridge';
import { ArbSys } from './abi/ArbSys';
import { StandardArbERC20 } from './abi/StandardArbERC20';
import { ICustomToken } from './abi/ICustomToken';
import { ArbRetryableTx } from './abi/ArbRetryableTx';
import { PayableOverrides } from '@ethersproject/contracts';
export declare const ARB_SYS_ADDRESS = "0x0000000000000000000000000000000000000064";
export interface L2TokenData {
    ERC20?: {
        contract: StandardArbERC20;
        balance: BigNumber;
    };
    CUSTOM?: {
        contract: ICustomToken;
        balance: BigNumber;
    };
}
export interface Tokens {
    [contractAddress: string]: L2TokenData | undefined;
}
/**
 * L2 side only of {@link Bridge}
 */
export declare class L2Bridge {
    l2Signer: Signer;
    arbSys: ArbSys;
    arbTokenBridge: ArbTokenBridge;
    l2Tokens: Tokens;
    l2Provider: providers.Provider;
    l2EthBalance: BigNumber;
    arbRetryableTx: ArbRetryableTx;
    walletAddressCache?: string;
    constructor(arbTokenBridgeAddress: string, l2Signer: Signer);
    /**
     * Initiate Ether withdrawal (via ArbSys)
     */
    withdrawETH(value: BigNumber, destinationAddress?: string, overrides?: PayableOverrides): Promise<ethers.ContractTransaction>;
    getLatestBlock(): Promise<providers.Block>;
    /**
     * Initiate token withdrawal (via ArbTokenBridge)
     */
    withdrawERC20(erc20l1Address: string, amount: BigNumber, destinationAddress?: string, overrides?: PayableOverrides): Promise<ethers.ContractTransaction>;
    updateAllL2Tokens(): Promise<Tokens>;
    getAndUpdateL2TokenData(erc20L1Address: string): Promise<L2TokenData | undefined>;
    getERC20L2Address(erc20L1Address: string): string | Promise<string>;
    getERC20L1Address(erc20L2Address: string): Promise<string> | undefined;
    getTxnSubmissionPrice(dataSize: BigNumber | number): Promise<[BigNumber, BigNumber]>;
    getWalletAddress(): Promise<string>;
    getAndUpdateL2EthBalance(): Promise<BigNumber>;
}
