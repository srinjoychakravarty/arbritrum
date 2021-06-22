import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { ERC777 } from '../ERC777';
export declare class ERC777__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<ERC777>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): ERC777;
    connect(signer: Signer): ERC777__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC777;
}
