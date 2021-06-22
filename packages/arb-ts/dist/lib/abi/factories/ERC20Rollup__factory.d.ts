import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { ERC20Rollup } from '../ERC20Rollup';
export declare class ERC20Rollup__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<ERC20Rollup>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): ERC20Rollup;
    connect(signer: Signer): ERC20Rollup__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Rollup;
}
