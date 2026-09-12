import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Add } from '../OpenrouterModelsTypes';
declare class AddEntity extends OpenrouterModelsEntityBase<Add> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: AddEntity): AddEntity;
}
export { AddEntity };
