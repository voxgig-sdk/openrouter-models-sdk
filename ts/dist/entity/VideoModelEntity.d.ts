import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { VideoModel, VideoModelListMatch } from '../OpenrouterModelsTypes';
declare class VideoModelEntity extends OpenrouterModelsEntityBase<VideoModel> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: VideoModelEntity): VideoModelEntity;
    list(this: any, reqmatch?: VideoModelListMatch, ctrl?: Control): Promise<VideoModelEntity[]>;
}
export { VideoModelEntity };
