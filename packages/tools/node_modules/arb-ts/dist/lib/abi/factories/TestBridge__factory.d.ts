import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { TestBridge } from '../TestBridge';
export declare class TestBridge__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<TestBridge>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): TestBridge;
    connect(signer: Signer): TestBridge__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestBridge;
}
