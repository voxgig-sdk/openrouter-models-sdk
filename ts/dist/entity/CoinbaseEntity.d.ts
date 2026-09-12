import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Coinbase } from '../OpenrouterModelsTypes';
declare class CoinbaseEntity extends OpenrouterModelsEntityBase<Coinbase> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: CoinbaseEntity): CoinbaseEntity;
}
export { CoinbaseEntity };
