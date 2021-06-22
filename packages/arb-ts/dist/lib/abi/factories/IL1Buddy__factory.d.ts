import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IL1Buddy } from '../IL1Buddy';
export declare class IL1Buddy__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IL1Buddy;
}
