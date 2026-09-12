import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Feedback } from '../OpenrouterModelsTypes';
declare class FeedbackEntity extends OpenrouterModelsEntityBase<Feedback> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: FeedbackEntity): FeedbackEntity;
}
export { FeedbackEntity };
