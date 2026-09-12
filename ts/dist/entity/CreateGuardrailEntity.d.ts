import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { CreateGuardrail } from '../OpenrouterModelsTypes';
declare class CreateGuardrailEntity extends OpenrouterModelsEntityBase<CreateGuardrail> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: CreateGuardrailEntity): CreateGuardrailEntity;
}
export { CreateGuardrailEntity };
