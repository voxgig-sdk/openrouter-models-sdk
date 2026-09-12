import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { SubmitGenerationFeedback, SubmitGenerationFeedbackCreateData } from '../OpenrouterModelsTypes';
declare class SubmitGenerationFeedbackEntity extends OpenrouterModelsEntityBase<SubmitGenerationFeedback> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: SubmitGenerationFeedbackEntity): SubmitGenerationFeedbackEntity;
    create(this: any, reqdata?: SubmitGenerationFeedbackCreateData, ctrl?: Control): Promise<SubmitGenerationFeedbackEntity>;
}
export { SubmitGenerationFeedbackEntity };
