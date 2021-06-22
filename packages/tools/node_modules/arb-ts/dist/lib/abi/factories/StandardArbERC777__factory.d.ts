import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { StandardArbERC777 } from '../StandardArbERC777';
export declare class StandardArbERC777__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<StandardArbERC777>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): StandardArbERC777;
    connect(signer: Signer): StandardArbERC777__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StandardArbERC777;
}
