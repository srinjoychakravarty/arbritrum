import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { ArbSymmetricTokenBridge } from '../ArbSymmetricTokenBridge';
export declare class ArbSymmetricTokenBridge__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<ArbSymmetricTokenBridge>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): ArbSymmetricTokenBridge;
    connect(signer: Signer): ArbSymmetricTokenBridge__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ArbSymmetricTokenBridge;
}
