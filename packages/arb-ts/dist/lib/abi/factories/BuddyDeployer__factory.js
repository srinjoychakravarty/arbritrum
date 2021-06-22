"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuddyDeployer__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class BuddyDeployer__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.BuddyDeployer__factory = BuddyDeployer__factory;
const _abi = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_sender',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: '_contract',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'withdrawalId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: '_success',
                type: 'bool',
            },
        ],
        name: 'Deployed',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'contractInitCode',
                type: 'bytes',
            },
        ],
        name: 'executeBuddyDeploy',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
];
const _bytecode = '0x608060405234801561001057600080fd5b506102ea806100206000396000f3fe60806040526004361061001e5760003560e01c8063cb18d43a14610023575b600080fd5b6100c96004803603602081101561003957600080fd5b81019060208101813564010000000081111561005457600080fd5b82018360208201111561006657600080fd5b8035906020019184600183028401116401000000008311171561008857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506100cb945050505050565b005b3233146101095760405162461bcd60e51b815260040180806020018281038252602681526020018061028f6026913960400191505060405180910390fd5b805133908190600090819083906020870134f560408051823b1519801515602480840191909152835180840382018152604493840185526020810180516001600160e01b031662d95a6760e31b17815285516349460b4d60e11b81526001600160a01b038c166004820190815293810196875282519581019590955281519698509296509460009460649463928c169a948c948994909392880191908083838c5b838110156101c25781810151838201526020016101aa565b50505050905090810190601f1680156101ef5780820380516001836020036101000a031916815260200191505b509350505050602060405180830381600087803b15801561020f57600080fd5b505af1158015610223573d6000803e3d6000fd5b505050506040513d602081101561023957600080fd5b5051604080518515158152905191925082916001600160a01b0380881692908a16917f8e17e94cdef33f36cd482b554719b84708983285fb5fc5e08f0ba40571db9dc19181900360200190a45050505050505056fe46756e6374696f6e2063616e742062652063616c6c6564206279204c3220636f6e7472616374a26469706673582212208ce24704d0d4e3056c26d4f3d318e67a46d629ce694f1a306b2a562e5f89d74164736f6c634300060b0033';