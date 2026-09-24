import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Completion, CompletionCreateData } from '../OpenrouterModelsTypes';
declare class CompletionEntity extends OpenrouterModelsEntityBase<Completion> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: CompletionEntity): CompletionEntity;
    create(this: any, reqdata?: CompletionCreateData, ctrl?: Control): Promise<CompletionEntity>;
}
export { CompletionEntity };
