import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Count } from '../OpenrouterModelsTypes';
declare class CountEntity extends OpenrouterModelsEntityBase<Count> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: CountEntity): CountEntity;
}
export { CountEntity };
