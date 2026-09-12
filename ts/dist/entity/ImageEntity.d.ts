import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Image, ImageCreateData } from '../OpenrouterModelsTypes';
declare class ImageEntity extends OpenrouterModelsEntityBase<Image> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ImageEntity): ImageEntity;
    create(this: any, reqdata?: ImageCreateData, ctrl?: Control): Promise<ImageEntity>;
}
export { ImageEntity };
