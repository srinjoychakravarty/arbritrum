"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloneable__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class Cloneable__factory extends contracts_1.ContractFactory {
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
exports.Cloneable__factory = Cloneable__factory;
const _abi = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
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
];
const _bytecode = '0x6080604052348015600f57600080fd5b506000805460ff1916600117905560868061002b6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80636f791d2914602d575b600080fd5b60336047565b604080519115158252519081900360200190f35b60005460ff169056fea264697066735822122058b9ee7254c959b6503b4633dc6b8c4f765d5ee87fdf5bbcc9e718528d29f83a64736f6c634300060b0033';
