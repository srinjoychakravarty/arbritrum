import { ContractReceipt, ethers } from 'ethers';
import { providers } from 'ethers';
import { BigNumber, Signer } from 'ethers';
export declare const addressToSymbol: (erc20L1Address: string) => string;
export interface L2ToL1EventResult {
    caller: string;
    destination: string;
    uniqueId: BigNumber;
    batchNumber: BigNumber;
    indexInBatch: BigNumber;
    arbBlockNum: BigNumber;
    ethBlockNum: BigNumber;
    timestamp: string;
    callvalue: BigNumber;
    data: string;
}
export interface WithdrawTokenEventResult {
    id: BigNumber;
    l1Address: string;
    amount: BigNumber;
    destination: string;
    exitNum: BigNumber;
    txHash: string;
}
export interface DepositTokenEventResult {
    destination: string;
    sender: string;
    seqNum: BigNumber;
    tokenType: 0 | 1 | 2;
    amount: BigNumber;
    tokenAddress: string;
}
export interface BuddyDeployEventResult {
    _sender: string;
    _contract: string;
    withdrawalId: BigNumber;
    success: boolean;
}
export interface OutboxProofData {
    batchNumber: BigNumber;
    proof: string[];
    path: BigNumber;
    l2Sender: string;
    l1Dest: string;
    l2Block: BigNumber;
    l1Block: BigNumber;
    timestamp: BigNumber;
    amount: BigNumber;
    calldataForL1: string;
}
export interface ActivateCustomTokenResult {
    seqNum: BigNumber;
    l1Addresss: string;
    l2Address: string;
}
export interface OutBoxTransactionExecuted {
    destAddr: string;
    l2Sender: string;
    outboxIndex: BigNumber;
    transactionIndex: BigNumber;
}
export declare enum OutgoingMessageState {
    /**
     * No corresponding {@link L2ToL1EventResult} emitted
     */
    NOT_FOUND = 0,
    /**
     * ArbSys.sendTxToL1 called, but assertion not yet confirmed
     */
    UNCONFIRMED = 1,
    /**
     * Assertion for outgoing message confirmed, but message not yet executed
     */
    CONFIRMED = 2,
    /**
     * Outgoing message executed (terminal state)
     */
    EXECUTED = 3
}
export declare type ChainIdOrProvider = BigNumber | providers.Provider;
/**
 * Stateless helper methods; most wrapped / accessible (and documented) via {@link Bridge}
 */
export declare class BridgeHelper {
    static getTokenWithdrawEventData: (destinationAddress: string, l2BridgeAddr: string, l2Provider: providers.Provider) => Promise<WithdrawTokenEventResult[]>;
    static calculateL2TransactionHash: (inboxSequenceNumber: BigNumber, chainIdOrL2Provider: ChainIdOrProvider) => Promise<string>;
    static bitFlipSeqNum: (seqNum: BigNumber) => ethers.BigNumber;
    private static _calculateRetryableHashInternal;
    static calculateL2RetryableTransactionHash: (inboxSequenceNumber: BigNumber, chainIdOrL2Provider: ChainIdOrProvider) => Promise<string>;
    static calculateRetryableAutoReedemTxnHash: (inboxSequenceNumber: BigNumber, chainIdOrL2Provider: ChainIdOrProvider) => Promise<string>;
    static waitForRetriableReceipt: (seqNum: BigNumber, l2Provider: providers.Provider) => Promise<ethers.providers.TransactionReceipt>;
    static getL2Transaction: (l2TransactionHash: string, l2Provider: providers.Provider) => Promise<ethers.providers.TransactionReceipt>;
    static getL1Transaction: (l1TransactionHash: string, l1Provider: providers.Provider) => Promise<ethers.providers.TransactionReceipt>;
    static getBuddyDeployInL2Transaction: (l2Transaction: providers.TransactionReceipt) => Promise<BuddyDeployEventResult[]>;
    static getDepositTokenEventData: (l1Transaction: providers.TransactionReceipt, l2BridgeAddress: string) => Promise<Array<DepositTokenEventResult>>;
    static getActivateCustomTokenEventResult: (l1Transaction: providers.TransactionReceipt, l1BridgeAddress: string) => Promise<Array<ActivateCustomTokenResult>>;
    static getWithdrawalsInL2Transaction: (l2Transaction: providers.TransactionReceipt, l2Provider: providers.Provider) => Promise<Array<L2ToL1EventResult>>;
    static getCoreBridgeFromInbox: (inboxAddress: string, l1Provider: providers.Provider) => Promise<string>;
    static getInboxSeqNumFromContractTransaction: (l1Transaction: providers.TransactionReceipt, inboxAddress: string) => Promise<ethers.BigNumber[] | undefined>;
    /**
     * Attempt to retrieve data necessary to execute outbox message; available before outbox entry is created /confirmed
     */
    static tryGetProof: (batchNumber: BigNumber, indexInBatch: BigNumber, l2Provider: providers.Provider, retryDelay?: number) => Promise<{
        proof: Array<string>;
        path: BigNumber;
        l2Sender: string;
        l1Dest: string;
        l2Block: BigNumber;
        l1Block: BigNumber;
        timestamp: BigNumber;
        amount: BigNumber;
        calldataForL1: string;
    }>;
    static wait: (ms: number) => Promise<unknown>;
    static tryGetProofOnce: (batchNumber: BigNumber, indexInBatch: BigNumber, l2Provider: providers.Provider) => Promise<{
        proof: Array<string>;
        path: BigNumber;
        l2Sender: string;
        l1Dest: string;
        l2Block: BigNumber;
        l1Block: BigNumber;
        timestamp: BigNumber;
        amount: BigNumber;
        calldataForL1: string;
    } | null>;
    static getOutboxEntry: (batchNumber: BigNumber, outboxAddress: string, l1Provider: providers.Provider) => Promise<string>;
    static waitUntilOutboxEntryCreated: (batchNumber: BigNumber, activeOutboxAddress: string, l1Provider: providers.Provider, retryDelay?: number) => Promise<string>;
    static getActiveOutbox: (l1CoreBridgeAddress: string, l1Provider: providers.Provider) => Promise<string>;
    static tryOutboxExecute: (outboxProofData: OutboxProofData, l1CoreBridgeAddress: string, l1Signer: Signer) => Promise<ContractReceipt>;
    static triggerL2ToL1Transaction: (batchNumber: BigNumber, indexInBatch: BigNumber, l1CoreBridgeAddress: string, l2Provider: providers.Provider, l1Signer: Signer, singleAttempt?: boolean) => Promise<ContractReceipt>;
    static getL2ToL1EventData: (destinationAddress: string, l2Provider: providers.Provider) => Promise<L2ToL1EventResult[]>;
    /**
     * Check if given assertion has been confirmed
     */
    static assertionIsConfirmed: (nodeNum: BigNumber, rollupAddress: string, l1Provider: providers.Provider) => Promise<boolean>;
    static getNodeCreatedEvents: (rollupAddress: string, l1Provider: providers.Provider) => Promise<ethers.providers.Log[]>;
    static getOutgoingMessage: (batchNumber: BigNumber, indexInBatch: BigNumber, l2Provider: providers.Provider) => Promise<L2ToL1EventResult[]>;
    /**
     * Get outgoing message Id (key to in OutboxEntry.spentOutput)
     */
    static calculateOutgoingMessageId: (path: BigNumber, proofLength: BigNumber) => string;
    /**
     * Check if given outbox message has already been executed
     */
    static messageHasExecuted: (outboxIndex: BigNumber, path: BigNumber, outboxAddress: string, l1Provider: providers.Provider) => Promise<boolean>;
    static getOutgoingMessageState: (batchNumber: BigNumber, indexInBatch: BigNumber, outBoxAddress: string, l1Provider: providers.Provider, l2Provider: providers.Provider) => Promise<OutgoingMessageState>;
}
