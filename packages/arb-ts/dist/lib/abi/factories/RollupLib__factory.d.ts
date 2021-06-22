import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { RollupLib } from '../RollupLib';
export declare class RollupLib__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<RollupLib>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): RollupLib;
    connect(signer: Signer): RollupLib__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): RollupLib;
}
