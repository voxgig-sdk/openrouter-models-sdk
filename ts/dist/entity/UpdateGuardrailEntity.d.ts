import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { UpdateGuardrail, UpdateGuardrailUpdateData } from '../OpenrouterModelsTypes';
declare class UpdateGuardrailEntity extends OpenrouterModelsEntityBase<UpdateGuardrail> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: UpdateGuardrailEntity): UpdateGuardrailEntity;
    update(this: any, reqdata?: UpdateGuardrailUpdateData, ctrl?: Control): Promise<UpdateGuardrailEntity>;
}
export { UpdateGuardrailEntity };
