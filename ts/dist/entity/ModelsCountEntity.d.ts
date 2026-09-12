import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { ModelsCount, ModelsCountLoadMatch } from '../OpenrouterModelsTypes';
declare class ModelsCountEntity extends OpenrouterModelsEntityBase<ModelsCount> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ModelsCountEntity): ModelsCountEntity;
    load(this: any, reqmatch?: ModelsCountLoadMatch, ctrl?: Control): Promise<ModelsCountEntity>;
}
export { ModelsCountEntity };
