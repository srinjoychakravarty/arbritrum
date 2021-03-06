"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgeHelper = exports.OutgoingMessageState = exports.addressToSymbol = void 0;
const ethers_1 = require("ethers");
const ArbTokenBridge__factory_1 = require("./abi/factories/ArbTokenBridge__factory");
const EthERC20Bridge__factory_1 = require("./abi/factories/EthERC20Bridge__factory");
const Outbox__factory_1 = require("./abi/factories/Outbox__factory");
const Bridge__factory_1 = require("./abi/factories/Bridge__factory");
const Inbox__factory_1 = require("./abi/factories/Inbox__factory");
const ArbSys__factory_1 = require("./abi/factories/ArbSys__factory");
const Rollup__factory_1 = require("./abi/factories/Rollup__factory");
const ethers_2 = require("ethers");
const ethers_3 = require("ethers");
const l2Bridge_1 = require("./l2Bridge");
const addressToSymbol = (erc20L1Address) => {
    return erc20L1Address.substr(erc20L1Address.length - 3).toUpperCase() + '?';
};
exports.addressToSymbol = addressToSymbol;
var OutgoingMessageState;
(function (OutgoingMessageState) {
    /**
     * No corresponding {@link L2ToL1EventResult} emitted
     */
    OutgoingMessageState[OutgoingMessageState["NOT_FOUND"] = 0] = "NOT_FOUND";
    /**
     * ArbSys.sendTxToL1 called, but assertion not yet confirmed
     */
    OutgoingMessageState[OutgoingMessageState["UNCONFIRMED"] = 1] = "UNCONFIRMED";
    /**
     * Assertion for outgoing message confirmed, but message not yet executed
     */
    OutgoingMessageState[OutgoingMessageState["CONFIRMED"] = 2] = "CONFIRMED";
    /**
     * Outgoing message executed (terminal state)
     */
    OutgoingMessageState[OutgoingMessageState["EXECUTED"] = 3] = "EXECUTED";
})(OutgoingMessageState = exports.OutgoingMessageState || (exports.OutgoingMessageState = {}));
const NODE_INTERFACE_ADDRESS = '0x00000000000000000000000000000000000000C8';
/**
 * Stateless helper methods; most wrapped / accessible (and documented) via {@link Bridge}
 */
class BridgeHelper {
}
exports.BridgeHelper = BridgeHelper;
BridgeHelper.getTokenWithdrawEventData = async (destinationAddress, l2BridgeAddr, l2Provider) => {
    const contract = ArbTokenBridge__factory_1.ArbTokenBridge__factory.connect(l2BridgeAddr, l2Provider);
    const iface = contract.interface;
    const tokenWithdrawEvent = iface.getEvent('WithdrawToken');
    const tokenWithdrawTopic = iface.getEventTopic(tokenWithdrawEvent);
    const topics = [
        tokenWithdrawTopic,
        null,
        ethers_2.utils.hexZeroPad(destinationAddress, 32),
    ];
    const logs = await l2Provider.getLogs({
        address: l2BridgeAddr,
        // @ts-ignore
        topics,
        fromBlock: 0,
        toBlock: 'latest',
    });
    return logs.map(log => {
        const data = Object.assign(Object.assign({}, iface.parseLog(log).args), { txHash: log.transactionHash });
        return data;
    });
};
BridgeHelper.calculateL2TransactionHash = async (inboxSequenceNumber, chainIdOrL2Provider) => {
    const l2ChainId = ethers_3.BigNumber.isBigNumber(chainIdOrL2Provider)
        ? chainIdOrL2Provider
        : ethers_3.BigNumber.from((await chainIdOrL2Provider.getNetwork()).chainId);
    return ethers_2.utils.keccak256(ethers_2.utils.concat([
        ethers_2.utils.zeroPad(l2ChainId.toHexString(), 32),
        ethers_2.utils.zeroPad(BridgeHelper.bitFlipSeqNum(inboxSequenceNumber).toHexString(), 32),
    ]));
};
BridgeHelper.bitFlipSeqNum = (seqNum) => {
    return seqNum.or(ethers_3.BigNumber.from(1).shl(255));
};
BridgeHelper._calculateRetryableHashInternal = async (inboxSequenceNumber, chainIdOrL2Provider, txnType) => {
    const requestID = await BridgeHelper.calculateL2TransactionHash(inboxSequenceNumber, chainIdOrL2Provider);
    return ethers_2.utils.keccak256(ethers_2.utils.concat([
        ethers_2.utils.zeroPad(requestID, 32),
        ethers_2.utils.zeroPad(ethers_3.BigNumber.from(txnType).toHexString(), 32),
    ]));
};
BridgeHelper.calculateL2RetryableTransactionHash = async (inboxSequenceNumber, chainIdOrL2Provider) => {
    return BridgeHelper._calculateRetryableHashInternal(inboxSequenceNumber, chainIdOrL2Provider, 0);
};
BridgeHelper.calculateRetryableAutoReedemTxnHash = async (inboxSequenceNumber, chainIdOrL2Provider) => {
    return BridgeHelper._calculateRetryableHashInternal(inboxSequenceNumber, chainIdOrL2Provider, 1);
};
BridgeHelper.waitForRetriableReceipt = async (seqNum, l2Provider) => {
    const l2RetriableHash = await BridgeHelper.calculateL2RetryableTransactionHash(seqNum, l2Provider);
    return l2Provider.waitForTransaction(l2RetriableHash);
};
BridgeHelper.getL2Transaction = async (l2TransactionHash, l2Provider) => {
    const txReceipt = await l2Provider.getTransactionReceipt(l2TransactionHash);
    if (!txReceipt)
        throw new Error("Can't find L2 transaction receipt?");
    return txReceipt;
};
BridgeHelper.getL1Transaction = async (l1TransactionHash, l1Provider) => {
    const txReceipt = await l1Provider.getTransactionReceipt(l1TransactionHash);
    if (!txReceipt)
        throw new Error("Can't find L1 transaction receipt?");
    return txReceipt;
};
BridgeHelper.getBuddyDeployInL2Transaction = async (l2Transaction) => {
    const iface = new ethers_2.utils.Interface([
        `event Deployed(address indexed _sender, address indexed _contract, uint256 indexed withdrawalId, bool _success)`,
    ]);
    const DeployedEvent = iface.getEvent('Deployed');
    const eventTopic = iface.getEventTopic(DeployedEvent);
    const logs = l2Transaction.logs.filter(log => log.topics[0] === eventTopic);
    return logs.map(log => iface.parseLog(log).args);
};
BridgeHelper.getDepositTokenEventData = async (l1Transaction, l2BridgeAddress) => {
    const factory = new EthERC20Bridge__factory_1.EthERC20Bridge__factory();
    // TODO: does this work?
    const contract = factory.attach(l2BridgeAddress);
    const iface = contract.interface;
    const event = iface.getEvent('DepositToken');
    const eventTopic = iface.getEventTopic(event);
    const logs = l1Transaction.logs.filter(log => log.topics[0] === eventTopic);
    return logs.map(log => iface.parseLog(log).args);
};
BridgeHelper.getActivateCustomTokenEventResult = async (l1Transaction, l1BridgeAddress) => {
    const factory = new EthERC20Bridge__factory_1.EthERC20Bridge__factory();
    const contract = factory.attach(l1BridgeAddress);
    const iface = contract.interface;
    const event = iface.getEvent('ActivateCustomToken');
    const eventTopic = iface.getEventTopic(event);
    const logs = l1Transaction.logs.filter(log => {
        return log.topics[0] === eventTopic;
    });
    return logs.map(log => iface.parseLog(log).args);
};
BridgeHelper.getWithdrawalsInL2Transaction = async (l2Transaction, l2Provider) => {
    // TODO: can we use dummies to get interface?
    const contract = ArbSys__factory_1.ArbSys__factory.connect(l2Bridge_1.ARB_SYS_ADDRESS, l2Provider);
    const iface = contract.interface;
    const l2ToL1Event = iface.getEvent('L2ToL1Transaction');
    const eventTopic = iface.getEventTopic(l2ToL1Event);
    const logs = l2Transaction.logs.filter(log => log.topics[0] === eventTopic);
    return logs.map(log => iface.parseLog(log).args);
};
BridgeHelper.getCoreBridgeFromInbox = (inboxAddress, l1Provider) => {
    const contract = Inbox__factory_1.Inbox__factory.connect(inboxAddress, l1Provider);
    return contract.functions.bridge().then(([res]) => res);
};
BridgeHelper.getInboxSeqNumFromContractTransaction = async (l1Transaction, inboxAddress) => {
    const factory = new Inbox__factory_1.Inbox__factory();
    const contract = factory.attach(inboxAddress);
    const iface = contract.interface;
    const messageDelivered = iface.getEvent('InboxMessageDelivered');
    const messageDeliveredFromOrigin = iface.getEvent('InboxMessageDeliveredFromOrigin');
    const eventTopics = {
        InboxMessageDelivered: iface.getEventTopic(messageDelivered),
        InboxMessageDeliveredFromOrigin: iface.getEventTopic(messageDeliveredFromOrigin),
    };
    const logs = l1Transaction.logs.filter(log => log.topics[0] === eventTopics.InboxMessageDelivered ||
        log.topics[0] === eventTopics.InboxMessageDeliveredFromOrigin);
    if (logs.length === 0)
        return undefined;
    return logs.map(log => ethers_3.BigNumber.from(log.topics[1]));
};
/**
 * Attempt to retrieve data necessary to execute outbox message; available before outbox entry is created /confirmed
 */
BridgeHelper.tryGetProof = async (batchNumber, indexInBatch, l2Provider, retryDelay = 500) => {
    const contractInterface = new ethers_2.utils.Interface([
        `function lookupMessageBatchProof(uint256 batchNum, uint64 index)
          external
          view
          returns (
              bytes32[] memory proof,
              uint256 path,
              address l2Sender,
              address l1Dest,
              uint256 l2Block,
              uint256 l1Block,
              uint256 timestamp,
              uint256 amount,
              bytes memory calldataForL1
          )`,
    ]);
    const nodeInterface = new ethers_3.Contract(NODE_INTERFACE_ADDRESS, contractInterface).connect(l2Provider);
    try {
        const res = await nodeInterface.callStatic.lookupMessageBatchProof(batchNumber, indexInBatch);
        return res;
    }
    catch (e) {
        const expectedError = "batch doesn't exist";
        if (e &&
            e.error &&
            e.error.message &&
            e.error.message === expectedError) {
            console.log('Withdrawal detected, but batch not created yet. Going to wait a bit.');
        }
        else {
            console.log("Withdrawal proof didn't work. Not sure why");
            console.log(e);
            console.log('Going to try again after waiting');
        }
        await BridgeHelper.wait(retryDelay);
        console.log('New attempt starting');
        // TODO: should exponential backoff?
        return BridgeHelper.tryGetProof(batchNumber, indexInBatch, l2Provider, retryDelay);
    }
};
BridgeHelper.wait = (ms) => new Promise(res => setTimeout(res, ms));
BridgeHelper.tryGetProofOnce = async (batchNumber, indexInBatch, l2Provider) => {
    const nodeInterfaceAddress = '0x00000000000000000000000000000000000000C8';
    const contractInterface = new ethers_2.utils.Interface([
        `function lookupMessageBatchProof(uint256 batchNum, uint64 index)
          external
          view
          returns (
              bytes32[] memory proof,
              uint256 path,
              address l2Sender,
              address l1Dest,
              uint256 l2Block,
              uint256 l1Block,
              uint256 timestamp,
              uint256 amount,
              bytes memory calldataForL1
          )`,
    ]);
    const nodeInterface = new ethers_3.Contract(nodeInterfaceAddress, contractInterface).connect(l2Provider);
    try {
        const res = await nodeInterface.callStatic.lookupMessageBatchProof(batchNumber, indexInBatch);
        return res;
    }
    catch (e) {
        const expectedError = "batch doesn't exist";
        if (e &&
            e.error &&
            e.error.message &&
            e.error.message === expectedError) {
            console.log('Withdrawal detected, but batch not created yet.');
        }
        else {
            console.log("Withdrawal proof didn't work. Not sure why");
            console.log(e);
        }
    }
    return null;
};
BridgeHelper.getOutboxEntry = async (batchNumber, outboxAddress, l1Provider) => {
    const iface = new ethers_1.ethers.utils.Interface([
        'function outboxes(uint256) public view returns (address)',
        'function outboxesLength() public view returns (uint256)',
    ]);
    const outbox = new ethers_1.ethers.Contract(outboxAddress, iface).connect(l1Provider);
    const len = await outbox.outboxesLength();
    if (batchNumber.gte(len)) {
        return ethers_2.constants.AddressZero;
    }
    return outbox.outboxes(batchNumber);
};
BridgeHelper.waitUntilOutboxEntryCreated = async (batchNumber, activeOutboxAddress, l1Provider, retryDelay = 500) => {
    try {
        // if outbox entry not created yet, this reads from array out of bounds
        const expectedEntry = await BridgeHelper.getOutboxEntry(batchNumber, activeOutboxAddress, l1Provider);
        console.log('Found entry index!');
        return expectedEntry;
    }
    catch (e) {
        console.log("can't find entry, lets wait a bit?");
        if (e.message === 'invalid opcode: opcode 0xfe not defined') {
            console.log('Array out of bounds, wait until the entry is posted');
        }
        else {
            console.log(e);
            console.log(e.message);
        }
        await BridgeHelper.wait(retryDelay);
        console.log('Starting new attempt');
        return BridgeHelper.waitUntilOutboxEntryCreated(batchNumber, activeOutboxAddress, l1Provider, retryDelay);
    }
};
BridgeHelper.getActiveOutbox = async (l1CoreBridgeAddress, l1Provider) => {
    const bridge = await Bridge__factory_1.Bridge__factory.connect(l1CoreBridgeAddress, l1Provider);
    const [activeOutboxAddress] = await bridge.functions.allowedOutboxList(0);
    try {
        // index 1 should not exist
        await bridge.functions.allowedOutboxList(1);
        console.error('There is more than 1 outbox registered with the bridge?!');
    }
    catch (e) {
        // this should fail!
        console.log('All is good');
    }
    return activeOutboxAddress;
};
BridgeHelper.tryOutboxExecute = async (outboxProofData, l1CoreBridgeAddress, l1Signer) => {
    if (!l1Signer.provider)
        throw new Error('No L1 provider in L1 signer');
    const activeOutboxAddress = await BridgeHelper.getActiveOutbox(l1CoreBridgeAddress, l1Signer.provider);
    await BridgeHelper.waitUntilOutboxEntryCreated(outboxProofData.batchNumber, activeOutboxAddress, l1Signer.provider);
    const outbox = Outbox__factory_1.Outbox__factory.connect(activeOutboxAddress, l1Signer);
    try {
        // TODO: wait until assertion is confirmed before execute
        // We can predict and print number of missing blocks
        // if not challenged
        const outboxExecute = await outbox.functions.executeTransaction(outboxProofData.batchNumber, outboxProofData.proof, outboxProofData.path, outboxProofData.l2Sender, outboxProofData.l1Dest, outboxProofData.l2Block, outboxProofData.l1Block, outboxProofData.timestamp, outboxProofData.amount, outboxProofData.calldataForL1);
        console.log(`Transaction hash: ${outboxExecute.hash}`);
        console.log('Waiting for receipt');
        const receipt = await outboxExecute.wait();
        console.log('Receipt emitted');
        return receipt;
    }
    catch (e) {
        console.log('failed to execute tx in layer 1');
        console.log(e);
        // TODO: should we just try again after delay instead of throwing?
        throw e;
    }
};
BridgeHelper.triggerL2ToL1Transaction = async (batchNumber, indexInBatch, l1CoreBridgeAddress, l2Provider, l1Signer, singleAttempt = false) => {
    if (!l1Signer.provider)
        throw new Error('Signer must be connected to L2 provider');
    console.log('going to get proof');
    let res;
    if (singleAttempt) {
        const _res = await BridgeHelper.tryGetProofOnce(batchNumber, indexInBatch, l2Provider);
        if (_res === null) {
            throw new Error('Proof not found');
        }
        res = _res;
    }
    else {
        res = await BridgeHelper.tryGetProof(batchNumber, indexInBatch, l2Provider);
    }
    const proofData = Object.assign(Object.assign({}, res), { batchNumber });
    console.log('got proof');
    const outboxExecuteTransactionReceipt = await BridgeHelper.tryOutboxExecute(proofData, l1CoreBridgeAddress, l1Signer);
    return outboxExecuteTransactionReceipt;
};
BridgeHelper.getL2ToL1EventData = async (destinationAddress, l2Provider) => {
    const contract = ArbSys__factory_1.ArbSys__factory.connect(l2Bridge_1.ARB_SYS_ADDRESS, l2Provider);
    const iface = contract.interface;
    const l2ToL1TransactionEvent = iface.getEvent('L2ToL1Transaction');
    const l2ToL1TransactionTopic = iface.getEventTopic(l2ToL1TransactionEvent);
    const topics = [
        l2ToL1TransactionTopic,
        ethers_1.ethers.utils.hexZeroPad(destinationAddress, 32),
    ];
    const logs = await l2Provider.getLogs({
        address: l2Bridge_1.ARB_SYS_ADDRESS,
        topics,
        fromBlock: 0,
        toBlock: 'latest',
    });
    return logs.map(log => iface.parseLog(log).args);
};
/**
 * Check if given assertion has been confirmed
 */
BridgeHelper.assertionIsConfirmed = async (nodeNum, rollupAddress, l1Provider) => {
    const contract = Rollup__factory_1.Rollup__factory.connect(rollupAddress, l1Provider)
        .interface;
    const iface = contract;
    const nodeConfirmedEvent = iface.getEvent('NodeConfirmed');
    const nodeConfirmedEventTopic = iface.getEventTopic(nodeConfirmedEvent);
    const logs = await l1Provider.getLogs({
        address: rollupAddress,
        topics: [
            nodeConfirmedEventTopic,
            ethers_1.ethers.utils.hexZeroPad(nodeNum.toHexString(), 32),
        ],
        fromBlock: 0,
        toBlock: 'latest',
    });
    return logs.length === 1;
};
BridgeHelper.getNodeCreatedEvents = async (rollupAddress, l1Provider) => {
    const contract = Rollup__factory_1.Rollup__factory.connect(rollupAddress, l1Provider)
        .interface;
    const iface = contract;
    const nodeCreatedEvent = iface.getEvent('NodeCreated');
    const nodeCreatedEventTopic = iface.getEventTopic(nodeCreatedEvent);
    const logs = await l1Provider.getLogs({
        address: rollupAddress,
        topics: [nodeCreatedEventTopic],
        fromBlock: 0,
        toBlock: 'latest',
    });
    return logs;
};
BridgeHelper.getOutgoingMessage = async (batchNumber, indexInBatch, l2Provider) => {
    const contract = ArbSys__factory_1.ArbSys__factory.connect(l2Bridge_1.ARB_SYS_ADDRESS, l2Provider);
    const iface = contract.interface;
    const l2ToL1TransactionEvent = iface.getEvent('L2ToL1Transaction');
    const l2ToL1TransactionTopic = iface.getEventTopic(l2ToL1TransactionEvent);
    const topics = [
        l2ToL1TransactionTopic,
        null,
        null,
        ethers_1.ethers.utils.hexZeroPad(batchNumber.toHexString(), 32),
    ];
    const logs = await l2Provider.getLogs({
        address: l2Bridge_1.ARB_SYS_ADDRESS,
        // @ts-ignore
        topics,
        fromBlock: 0,
        toBlock: 'latest',
    });
    const parsedData = logs.map(log => iface.parseLog(log).args);
    return parsedData.filter(log => log.indexInBatch.eq(indexInBatch));
};
/**
 * Get outgoing message Id (key to in OutboxEntry.spentOutput)
 */
BridgeHelper.calculateOutgoingMessageId = (path, proofLength) => {
    return ethers_2.utils.keccak256(ethers_2.utils.defaultAbiCoder.encode(['uint256', 'uint256'], [path, proofLength]));
};
/**
 * Check if given outbox message has already been executed
 */
BridgeHelper.messageHasExecuted = async (outboxIndex, path, outboxAddress, l1Provider) => {
    const contract = Outbox__factory_1.Outbox__factory.connect(outboxAddress, l1Provider)
        .interface;
    const iface = contract;
    const executedEvent = iface.getEvent('OutBoxTransactionExecuted');
    const executedTopic = iface.getEventTopic(executedEvent);
    const logs = await l1Provider.getLogs({
        address: outboxAddress,
        topics: [
            executedTopic,
            // @ts-ignore
            null,
            // @ts-ignore
            null,
            ethers_1.ethers.utils.hexZeroPad(outboxIndex.toHexString(), 32),
        ],
        fromBlock: 0,
        toBlock: 'latest',
    });
    const parsedData = logs.map(log => iface.parseLog(log).args);
    return (parsedData.filter(executedEvent => executedEvent.transactionIndex.eq(path)).length === 1);
};
BridgeHelper.getOutgoingMessageState = async (batchNumber, indexInBatch, outBoxAddress, l1Provider, l2Provider) => {
    try {
        const proofData = await BridgeHelper.tryGetProofOnce(batchNumber, indexInBatch, l2Provider);
        if (!proofData) {
            return OutgoingMessageState.UNCONFIRMED;
        }
        const messageExecuted = await BridgeHelper.messageHasExecuted(batchNumber, proofData.path, outBoxAddress, l1Provider);
        if (messageExecuted) {
            return OutgoingMessageState.EXECUTED;
        }
        const outboxEntry = await BridgeHelper.getOutboxEntry(batchNumber, outBoxAddress, l1Provider);
        if (outboxEntry === ethers_2.constants.AddressZero) {
            return OutgoingMessageState.UNCONFIRMED;
        }
        else {
            return OutgoingMessageState.CONFIRMED;
        }
    }
    catch (e) {
        console.warn('666: error in getOutgoingMessageState:', e);
        return OutgoingMessageState.NOT_FOUND;
    }
};
