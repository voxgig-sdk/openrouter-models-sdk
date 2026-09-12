import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Remove } from '../OpenrouterModelsTypes';
declare class RemoveEntity extends OpenrouterModelsEntityBase<Remove> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: RemoveEntity): RemoveEntity;
}
export { RemoveEntity };
