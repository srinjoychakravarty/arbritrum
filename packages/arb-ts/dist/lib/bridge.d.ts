import { Signer, BigNumber, ethers, ContractReceipt } from 'ethers';
import { L1Bridge } from './l1Bridge';
import { L2Bridge } from './l2Bridge';
import { PayableOverrides } from '@ethersproject/contracts';
interface RetryableGasArgs {
    maxSubmissionPrice?: BigNumber;
    maxGas?: BigNumber;
    gasPriceBid?: BigNumber;
    maxSubmissionPriceIncreaseRatio?: BigNumber;
}
/**
 * Main class for accessing token bridge methods; inherits methods from {@link L1Bridge} and {@link L2Bridge}
 */
export declare class Bridge extends L2Bridge {
    l1Bridge: L1Bridge;
    walletAddressCache?: string;
    outboxAddressCache?: string;
    constructor(erc20BridgeAddress: string, arbERC20BridgeAddress: string, ethSigner: Signer, arbSigner: Signer);
    updateAllBalances(): void;
    /**
     * Update state of all tracked tokens (balance, allowance), etc. and returns state
     */
    updateAllTokens(): Promise<{
        l1Tokens: import("./l1Bridge").Tokens;
        l2Tokens: import("./l2Bridge").Tokens;
    }>;
    /**
     * Update target token (balance, allowance), etc. and state
     */
    updateTokenData(erc20l1Address: string): Promise<{
        l1Data: import("./l1Bridge").L1TokenData;
        l2Data: import("./l2Bridge").L2TokenData | undefined;
    }>;
    get l1Tokens(): import("./l1Bridge").Tokens;
    get l1EthBalance(): BigNumber;
    get ethERC20Bridge(): import("./abi").EthERC20Bridge;
    /**
     * Set allowance for L1 bridge contract
     */
    approveToken(erc20L1Address: string, overrides?: PayableOverrides): Promise<ethers.ContractTransaction>;
    /**
     * Deposit ether from L1 to L2. Users L1MessageType_L2FundedByL1 txn type ( type 7)
     */
    depositETH(value: BigNumber, destinationAddress?: string, maxGas?: BigNumber, _gasPriceBid?: BigNumber, overrides?: PayableOverrides): Promise<ethers.ContractTransaction>;
    /**
     * Token deposit; if no value given, calculates and includes minimum necessary value to fund L2 side of execution
     */
    deposit(erc20L1Address: string, amount: BigNumber, retryableGasArgs?: RetryableGasArgs, destinationAddress?: string, overrides?: PayableOverrides): Promise<ethers.ContractTransaction>;
    getAndUpdateL1TokenData(erc20l1Address: string): Promise<import("./l1Bridge").L1TokenData>;
    getAndUpdateL1EthBalance(): Promise<BigNumber>;
    getL2Transaction(l2TransactionHash: string): Promise<ethers.providers.TransactionReceipt>;
    getL1Transaction(l1TransactionHash: string): Promise<ethers.providers.TransactionReceipt>;
    /**
     * get hash of regular L2 txn from corresponding inbox sequence number
     */
    calculateL2TransactionHash(inboxSequenceNumber: BigNumber, l2ChainId?: BigNumber): Promise<string>;
    /**
     * Hash of L2 side of retryable txn; txn gets generated automatically and is formatted as tho user submitted
     */
    calculateL2RetryableTransactionHash(inboxSequenceNumber: BigNumber, l2ChainId?: BigNumber): Promise<string>;
    /**
     * Hash of L2 ArbOs generated "auto-redeem" transaction; if it succeeded, a transaction queryable by {@link calculateL2RetryableTransactionHash} will then be created
     */
    calculateRetryableAutoReedemTxnHash(inboxSequenceNumber: BigNumber, l2ChainId?: BigNumber): Promise<string>;
    getInboxSeqNumFromContractTransaction(l1Transaction: ethers.providers.TransactionReceipt): Promise<BigNumber[] | undefined>;
    /**
     * Convenience method to directly retrieve retryable hash from an l1 transaction
     */
    getL2TxHashByRetryableTicket(l1Transaction: string | ContractReceipt): Promise<string>;
    getBuddyDeployInL2Transaction(l2Transaction: ethers.providers.TransactionReceipt): Promise<import("./bridge_helpers").BuddyDeployEventResult[]>;
    getWithdrawalsInL2Transaction(l2Transaction: ethers.providers.TransactionReceipt): Promise<import("./bridge_helpers").L2ToL1EventResult[]>;
    getDepositTokenEventData(l1Transaction: ethers.providers.TransactionReceipt): Promise<import("./bridge_helpers").DepositTokenEventResult[]>;
    /**
     * Attempt to execute an outbox message; must be confirmed to succeed (i.e., confirmation delay must have passed)
     */
    triggerL2ToL1Transaction(batchNumber: BigNumber, indexInBatch: BigNumber, singleAttempt?: boolean): Promise<ethers.ContractReceipt>;
    tryOutboxExecute(activeOutboxAddress: string, batchNumber: BigNumber, proof: Array<string>, path: BigNumber, l2Sender: string, l1Dest: string, l2Block: BigNumber, l1Block: BigNumber, timestamp: BigNumber, amount: BigNumber, calldataForL1: string): Promise<ethers.ContractReceipt>;
    tryGetProofOnce(batchNumber: BigNumber, indexInBatch: BigNumber): Promise<{
        proof: string[];
        path: BigNumber;
        l2Sender: string;
        l1Dest: string;
        l2Block: BigNumber;
        l1Block: BigNumber;
        timestamp: BigNumber;
        amount: BigNumber;
        calldataForL1: string;
    } | null>;
    tryGetProof(batchNumber: BigNumber, indexInBatch: BigNumber, retryDelay?: number): Promise<{
        proof: string[];
        path: BigNumber;
        l2Sender: string;
        l1Dest: string;
        l2Block: BigNumber;
        l1Block: BigNumber;
        timestamp: BigNumber;
        amount: BigNumber;
        calldataForL1: string;
    }>;
    waitUntilOutboxEntryCreated(batchNumber: BigNumber, activeOutboxAddress: string): Promise<string>;
    /**
     * Return receipt of retryable transaction after execution
     */
    waitForRetriableReceipt(seqNum: BigNumber): Promise<ethers.providers.TransactionReceipt>;
    getTokenWithdrawEventData(destinationAddress: string): Promise<import("./bridge_helpers").WithdrawTokenEventResult[]>;
    getL2ToL1EventData(destinationAddress: string): Promise<import("./bridge_helpers").L2ToL1EventResult[]>;
    getOutboxAddress(): Promise<string>;
    /**
     * Returns {@link OutgoingMessageState} for given outgoing message
     */
    getOutGoingMessageState(batchNumber: BigNumber, indexInBatch: BigNumber): Promise<import("./bridge_helpers").OutgoingMessageState>;
}
export {};
