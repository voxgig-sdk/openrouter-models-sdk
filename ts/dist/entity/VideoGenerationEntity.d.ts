import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { VideoGeneration, VideoGenerationLoadMatch } from '../OpenrouterModelsTypes';
declare class VideoGenerationEntity extends OpenrouterModelsEntityBase<VideoGeneration> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: VideoGenerationEntity): VideoGenerationEntity;
    load(this: any, reqmatch?: VideoGenerationLoadMatch, ctrl?: Control): Promise<VideoGenerationEntity>;
}
export { VideoGenerationEntity };
