import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Generation, GenerationLoadMatch } from '../OpenrouterModelsTypes';
declare class GenerationEntity extends OpenrouterModelsEntityBase<Generation> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: GenerationEntity): GenerationEntity;
    load(this: any, reqmatch?: GenerationLoadMatch, ctrl?: Control): Promise<GenerationEntity>;
}
export { GenerationEntity };
