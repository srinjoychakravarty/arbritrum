import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { AbsRollup } from '../AbsRollup';
export declare class AbsRollup__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): AbsRollup;
}
