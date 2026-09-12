import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { VideoModelsList, VideoModelsListListMatch } from '../OpenrouterModelsTypes';
declare class VideoModelsListEntity extends OpenrouterModelsEntityBase<VideoModelsList> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: VideoModelsListEntity): VideoModelsListEntity;
    list(this: any, reqmatch?: VideoModelsListListMatch, ctrl?: Control): Promise<VideoModelsListEntity[]>;
}
export { VideoModelsListEntity };
