import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { GenerationContentData, GenerationContentDataLoadMatch } from '../OpenrouterModelsTypes';
declare class GenerationContentDataEntity extends OpenrouterModelsEntityBase<GenerationContentData> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: GenerationContentDataEntity): GenerationContentDataEntity;
    load(this: any, reqmatch?: GenerationContentDataLoadMatch, ctrl?: Control): Promise<GenerationContentDataEntity>;
}
export { GenerationContentDataEntity };
