import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { CreatePresetFromInference, CreatePresetFromInferenceCreateData } from '../OpenrouterModelsTypes';
declare class CreatePresetFromInferenceEntity extends OpenrouterModelsEntityBase<CreatePresetFromInference> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: CreatePresetFromInferenceEntity): CreatePresetFromInferenceEntity;
    create(this: any, reqdata?: CreatePresetFromInferenceCreateData, ctrl?: Control): Promise<CreatePresetFromInferenceEntity>;
}
export { CreatePresetFromInferenceEntity };
