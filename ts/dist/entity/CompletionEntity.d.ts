import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Completion } from '../OpenrouterModelsTypes';
declare class CompletionEntity extends OpenrouterModelsEntityBase<Completion> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: CompletionEntity): CompletionEntity;
}
export { CompletionEntity };
