import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { TestERC777 } from '../TestERC777';
export declare class TestERC777__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<TestERC777>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): TestERC777;
    connect(signer: Signer): TestERC777__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestERC777;
}
