import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Video, VideoLoadMatch, VideoCreateData } from '../OpenrouterModelsTypes';
declare class VideoEntity extends OpenrouterModelsEntityBase<Video> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: VideoEntity): VideoEntity;
    load(this: any, reqmatch?: VideoLoadMatch, ctrl?: Control): Promise<VideoEntity>;
    create(this: any, reqdata?: VideoCreateData, ctrl?: Control): Promise<VideoEntity>;
}
export { VideoEntity };
