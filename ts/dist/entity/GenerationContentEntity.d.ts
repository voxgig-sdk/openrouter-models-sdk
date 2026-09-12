import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { GenerationContent, GenerationContentLoadMatch } from '../OpenrouterModelsTypes';
declare class GenerationContentEntity extends OpenrouterModelsEntityBase<GenerationContent> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: GenerationContentEntity): GenerationContentEntity;
    load(this: any, reqmatch?: GenerationContentLoadMatch, ctrl?: Control): Promise<GenerationContentEntity>;
}
export { GenerationContentEntity };
