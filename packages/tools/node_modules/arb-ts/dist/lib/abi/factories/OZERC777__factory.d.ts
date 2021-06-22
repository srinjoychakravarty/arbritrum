import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { OZERC777 } from '../OZERC777';
export declare class OZERC777__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<OZERC777>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): OZERC777;
    connect(signer: Signer): OZERC777__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OZERC777;
}
