"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsRollup__factory = void 0;
const ethers_1 = require("ethers");
class AbsRollup__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.AbsRollup__factory = AbsRollup__factory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'nodeNum',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'afterSendAcc',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'afterSendCount',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'afterLogAcc',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'afterLogCount',
                type: 'uint256',
            },
        ],
        name: 'NodeConfirmed',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'nodeNum',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'parentNodeHash',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'nodeHash',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'executionHash',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'inboxMaxCount',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'afterInboxBatchEndCount',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'afterInboxBatchAcc',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'bytes32[3][2]',
                name: 'assertionBytes32Fields',
                type: 'bytes32[3][2]',
            },
            {
                indexed: false,
                internalType: 'uint256[4][2]',
                name: 'assertionIntFields',
                type: 'uint256[4][2]',
            },
        ],
        name: 'NodeCreated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'nodeNum',
                type: 'uint256',
            },
        ],
        name: 'NodeRejected',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'startNode',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'endNode',
                type: 'uint256',
            },
        ],
        name: 'NodesDestroyed',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'id',
                type: 'uint256',
            },
        ],
        name: 'OwnerFunctionCalled',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'Paused',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'challengeContract',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'asserter',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'challenger',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'challengedNode',
                type: 'uint256',
            },
        ],
        name: 'RollupChallengeStarted',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'machineHash',
                type: 'bytes32',
            },
        ],
        name: 'RollupCreated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'staker',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'newNode',
                type: 'uint256',
            },
        ],
        name: 'StakerReassigned',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'Unpaused',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: '_stakerMap',
        outputs: [
            {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'latestStakedNode',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'amountStaked',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: 'currentChallenge',
                type: 'address',
            },
            {
                internalType: 'bool',
                name: 'isStaked',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'staker',
                type: 'address',
            },
        ],
        name: 'amountStaked',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'arbGasSpeedLimitPerBlock',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'baseStake',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'challengeFactory',
        outputs: [
            {
                internalType: 'contract IChallengeFactory',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'winningStaker',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'losingStaker',
                type: 'address',
            },
        ],
        name: 'completeChallenge',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'beforeSendAcc',
                type: 'bytes32',
            },
            {
                internalType: 'bytes',
                name: 'sendsData',
                type: 'bytes',
            },
            {
                internalType: 'uint256[]',
                name: 'sendLengths',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256',
                name: 'afterSendCount',
                type: 'uint256',
            },
            {
                internalType: 'bytes32',
                name: 'afterLogAcc',
                type: 'bytes32',
            },
            {
                internalType: 'uint256',
                name: 'afterLogCount',
                type: 'uint256',
            },
        ],
        name: 'confirmNextNode',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'confirmPeriodBlocks',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'contract INode',
                name: 'node',
                type: 'address',
            },
        ],
        name: 'countStakedZombies',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address payable[2]',
                name: 'stakers',
                type: 'address[2]',
            },
            {
                internalType: 'uint256[2]',
                name: 'nodeNums',
                type: 'uint256[2]',
            },
            {
                internalType: 'bytes32[2]',
                name: 'executionHashes',
                type: 'bytes32[2]',
            },
            {
                internalType: 'uint256[2]',
                name: 'proposedTimes',
                type: 'uint256[2]',
            },
            {
                internalType: 'uint256[2]',
                name: 'maxMessageCounts',
                type: 'uint256[2]',
            },
        ],
        name: 'createChallenge',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'staker',
                type: 'address',
            },
        ],
        name: 'currentChallenge',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'currentRequiredStake',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'delayedBridge',
        outputs: [
            {
                internalType: 'contract IBridge',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'extraChallengeTimeBlocks',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'firstUnresolvedNode',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'nodeNum',
                type: 'uint256',
            },
        ],
        name: 'getNode',
        outputs: [
            {
                internalType: 'contract INode',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
            },
        ],
        name: 'getNodeHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'stakerNum',
                type: 'uint256',
            },
        ],
        name: 'getStakerAddress',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '_machineHash',
                type: 'bytes32',
            },
            {
                internalType: 'uint256',
                name: '_confirmPeriodBlocks',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_extraChallengeTimeBlocks',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_arbGasSpeedLimitPerBlock',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_baseStake',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: '_stakeToken',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_owner',
                type: 'address',
            },
            {
                internalType: 'bytes',
                name: '_extraConfig',
                type: 'bytes',
            },
            {
                internalType: 'address[6]',
                name: 'connectedContracts',
                type: 'address[6]',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'isMaster',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'staker',
                type: 'address',
            },
        ],
        name: 'isStaked',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'staker',
                type: 'address',
            },
        ],
        name: 'isZombie',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'lastStakeBlock',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'latestConfirmed',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'latestNodeCreated',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'staker',
                type: 'address',
            },
        ],
        name: 'latestStakedNode',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'minimumAssertionPeriod',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'nodeFactory',
        outputs: [
            {
                internalType: 'contract INodeFactory',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'outbox',
        outputs: [
            {
                internalType: 'contract IOutbox',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'pause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'paused',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'target',
                type: 'uint256',
            },
        ],
        name: 'reduceDeposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'stakerAddress',
                type: 'address',
            },
        ],
        name: 'rejectNextNode',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_outbox',
                type: 'address',
            },
        ],
        name: 'removeOldOutbox',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'startIndex',
                type: 'uint256',
            },
        ],
        name: 'removeOldZombies',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'zombieNum',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'maxNodes',
                type: 'uint256',
            },
        ],
        name: 'removeZombie',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'nodeNum',
                type: 'uint256',
            },
        ],
        name: 'requireUnresolved',
        outputs: [],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'requireUnresolvedExists',
        outputs: [],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'blockNumber',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'firstUnresolvedNodeNum',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'latestNodeCreated',
                type: 'uint256',
            },
        ],
        name: 'requiredStake',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'resume',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'stakerAddress',
                type: 'address',
            },
        ],
        name: 'returnOldDeposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'rollupEventBridge',
        outputs: [
            {
                internalType: 'contract RollupEventBridge',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'sequencerBridge',
        outputs: [
            {
                internalType: 'contract ISequencerInbox',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_inbox',
                type: 'address',
            },
            {
                internalType: 'bool',
                name: '_enabled',
                type: 'bool',
            },
        ],
        name: 'setInbox',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'contract IOutbox',
                name: '_outbox',
                type: 'address',
            },
        ],
        name: 'setOutbox',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'nodeNum',
                type: 'uint256',
            },
            {
                internalType: 'bytes32',
                name: 'nodeHash',
                type: 'bytes32',
            },
        ],
        name: 'stakeOnExistingNode',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'expectedNodeHash',
                type: 'bytes32',
            },
            {
                internalType: 'bytes32[3][2]',
                name: 'assertionBytes32Fields',
                type: 'bytes32[3][2]',
            },
            {
                internalType: 'uint256[4][2]',
                name: 'assertionIntFields',
                type: 'uint256[4][2]',
            },
            {
                internalType: 'uint256',
                name: 'beforeProposedBlock',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'beforeInboxMaxCount',
                type: 'uint256',
            },
            {
                internalType: 'bytes',
                name: 'sequencerBatchProof',
                type: 'bytes',
            },
        ],
        name: 'stakeOnNewNode',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'stakerCount',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address payable',
                name: 'destination',
                type: 'address',
            },
        ],
        name: 'withdrawStakerFunds',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'withdrawableFunds',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'zombieNum',
                type: 'uint256',
            },
        ],
        name: 'zombieAddress',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'zombieCount',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'zombieNum',
                type: 'uint256',
            },
        ],
        name: 'zombieLatestStakedNode',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
