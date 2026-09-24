import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { ImageModelListItem, ImageModelListItemListMatch } from '../OpenrouterModelsTypes';
declare class ImageModelListItemEntity extends OpenrouterModelsEntityBase<ImageModelListItem> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ImageModelListItemEntity): ImageModelListItemEntity;
    list(this: any, reqmatch?: ImageModelListItemListMatch, ctrl?: Control): Promise<ImageModelListItemEntity[]>;
}
export { ImageModelListItemEntity };
