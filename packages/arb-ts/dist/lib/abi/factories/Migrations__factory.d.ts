import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { Migrations } from '../Migrations';
export declare class Migrations__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Migrations>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Migrations;
    connect(signer: Signer): Migrations__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Migrations;
}
