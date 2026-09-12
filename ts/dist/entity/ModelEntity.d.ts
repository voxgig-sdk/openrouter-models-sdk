import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Model, ModelLoadMatch, ModelListMatch } from '../OpenrouterModelsTypes';
declare class ModelEntity extends OpenrouterModelsEntityBase<Model> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ModelEntity): ModelEntity;
    load(this: any, reqmatch?: ModelLoadMatch, ctrl?: Control): Promise<ModelEntity>;
    list(this: any, reqmatch?: ModelListMatch, ctrl?: Control): Promise<ModelEntity[]>;
}
export { ModelEntity };
