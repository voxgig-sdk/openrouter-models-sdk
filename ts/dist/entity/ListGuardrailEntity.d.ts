import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { ListGuardrail } from '../OpenrouterModelsTypes';
declare class ListGuardrailEntity extends OpenrouterModelsEntityBase<ListGuardrail> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ListGuardrailEntity): ListGuardrailEntity;
}
export { ListGuardrailEntity };
