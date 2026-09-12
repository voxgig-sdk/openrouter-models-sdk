import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Content } from '../OpenrouterModelsTypes';
declare class ContentEntity extends OpenrouterModelsEntityBase<Content> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ContentEntity): ContentEntity;
}
export { ContentEntity };
