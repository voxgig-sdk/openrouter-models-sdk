import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { ImageModelsList, ImageModelsListListMatch } from '../OpenrouterModelsTypes';
declare class ImageModelsListEntity extends OpenrouterModelsEntityBase<ImageModelsList> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ImageModelsListEntity): ImageModelsListEntity;
    list(this: any, reqmatch?: ImageModelsListListMatch, ctrl?: Control): Promise<ImageModelsListEntity[]>;
}
export { ImageModelsListEntity };
