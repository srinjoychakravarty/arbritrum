import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { SafeERC20Namer } from '../SafeERC20Namer';
export declare class SafeERC20Namer__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<SafeERC20Namer>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): SafeERC20Namer;
    connect(signer: Signer): SafeERC20Namer__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeERC20Namer;
}
