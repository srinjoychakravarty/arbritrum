"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISequencerInbox__factory = void 0;
const ethers_1 = require("ethers");
class ISequencerInbox__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISequencerInbox__factory = ISequencerInbox__factory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'firstMessageNum',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'beforeAcc',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'newMessageCount',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalDelayedMessagesRead',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes32[2]',
                name: 'afterAccAndDelayed',
                type: 'bytes32[2]',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'seqBatchIndex',
                type: 'uint256',
            },
        ],
        name: 'DelayedInboxForced',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'firstMessageNum',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'beforeAcc',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'newMessageCount',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'afterAcc',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'transactions',
                type: 'bytes',
            },
            {
                indexed: false,
                internalType: 'uint256[]',
                name: 'lengths',
                type: 'uint256[]',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'l1BlockNumber',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'timestamp',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalDelayedMessagesRead',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'delayedAcc',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'seqBatchIndex',
                type: 'uint256',
            },
        ],
        name: 'SequencerBatchDelivered',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'firstMessageNum',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'beforeAcc',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'newMessageCount',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'afterAcc',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'delayedAcc',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'seqBatchIndex',
                type: 'uint256',
            },
        ],
        name: 'SequencerBatchDeliveredFromOrigin',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
            },
        ],
        name: 'inboxAccs',
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
        inputs: [],
        name: 'maxDelayBlocks',
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
        name: 'maxDelaySeconds',
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
        name: 'messageCount',
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
                internalType: 'bytes',
                name: 'proof',
                type: 'bytes',
            },
            {
                internalType: 'uint256',
                name: 'inboxCount',
                type: 'uint256',
            },
        ],
        name: 'proveBatchContainsSequenceNumber',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
