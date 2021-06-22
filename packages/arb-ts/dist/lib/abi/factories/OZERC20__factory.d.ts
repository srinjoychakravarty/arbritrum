import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { OZERC20 } from '../OZERC20';
export declare class OZERC20__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<OZERC20>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): OZERC20;
    connect(signer: Signer): OZERC20__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OZERC20;
}
