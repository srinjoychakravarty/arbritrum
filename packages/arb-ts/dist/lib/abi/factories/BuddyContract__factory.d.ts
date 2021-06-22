import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { BuddyContract } from '../BuddyContract';
export declare class BuddyContract__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): BuddyContract;
}
