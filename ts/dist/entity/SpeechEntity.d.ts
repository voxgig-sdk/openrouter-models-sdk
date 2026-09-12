import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Speech } from '../OpenrouterModelsTypes';
declare class SpeechEntity extends OpenrouterModelsEntityBase<Speech> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: SpeechEntity): SpeechEntity;
}
export { SpeechEntity };
