import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { OpenResponsesResult, OpenResponsesResultCreateData } from '../OpenrouterModelsTypes';
declare class OpenResponsesResultEntity extends OpenrouterModelsEntityBase<OpenResponsesResult> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: OpenResponsesResultEntity): OpenResponsesResultEntity;
    create(this: any, reqdata?: OpenResponsesResultCreateData, ctrl?: Control): Promise<OpenResponsesResultEntity>;
}
export { OpenResponsesResultEntity };
