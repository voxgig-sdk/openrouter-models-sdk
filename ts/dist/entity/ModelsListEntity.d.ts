import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { ModelsList, ModelsListListMatch } from '../OpenrouterModelsTypes';
declare class ModelsListEntity extends OpenrouterModelsEntityBase<ModelsList> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ModelsListEntity): ModelsListEntity;
    list(this: any, reqmatch?: ModelsListListMatch, ctrl?: Control): Promise<ModelsListEntity[]>;
}
export { ModelsListEntity };
