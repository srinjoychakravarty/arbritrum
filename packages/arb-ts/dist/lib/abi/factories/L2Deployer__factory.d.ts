import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { L2Deployer } from '../L2Deployer';
export declare class L2Deployer__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<L2Deployer>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): L2Deployer;
    connect(signer: Signer): L2Deployer__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): L2Deployer;
}
