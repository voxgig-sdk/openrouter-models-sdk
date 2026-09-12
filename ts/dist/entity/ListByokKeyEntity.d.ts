import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { ListByokKey } from '../OpenrouterModelsTypes';
declare class ListByokKeyEntity extends OpenrouterModelsEntityBase<ListByokKey> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ListByokKeyEntity): ListByokKeyEntity;
}
export { ListByokKeyEntity };
