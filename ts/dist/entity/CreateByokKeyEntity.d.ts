import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { CreateByokKey } from '../OpenrouterModelsTypes';
declare class CreateByokKeyEntity extends OpenrouterModelsEntityBase<CreateByokKey> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: CreateByokKeyEntity): CreateByokKeyEntity;
}
export { CreateByokKeyEntity };
