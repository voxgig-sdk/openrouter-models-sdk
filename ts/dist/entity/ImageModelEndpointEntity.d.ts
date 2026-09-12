import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { ImageModelEndpoint, ImageModelEndpointListMatch } from '../OpenrouterModelsTypes';
declare class ImageModelEndpointEntity extends OpenrouterModelsEntityBase<ImageModelEndpoint> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ImageModelEndpointEntity): ImageModelEndpointEntity;
    list(this: any, reqmatch?: ImageModelEndpointListMatch, ctrl?: Control): Promise<ImageModelEndpointEntity[]>;
}
export { ImageModelEndpointEntity };
