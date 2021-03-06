"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reverter__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class Reverter__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(mode, overrides) {
        return super.deploy(mode, overrides || {});
    }
    getDeployTransaction(mode, overrides) {
        return super.getDeployTransaction(mode, overrides || {});
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
exports.Reverter__factory = Reverter__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'mode',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
];
const _bytecode = '0x6080604052348015600f57600080fd5b5060405161010538038061010583398181016040526020811015603157600080fd5b81019080805190602001909291905050506000811460b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600a8152602001807f4d6f6465206e6f7420300000000000000000000000000000000000000000000081525060200191505060405180910390fd5b50603f806100c66000396000f3fe6080604052600080fdfea2646970667358221220dc71a82b6f53bd32cf59c07c78a7372a8614516993748f0ecb2b0456c44ffc6864736f6c634300060b0033';
