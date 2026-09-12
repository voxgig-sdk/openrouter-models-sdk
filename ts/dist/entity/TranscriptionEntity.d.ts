import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Transcription } from '../OpenrouterModelsTypes';
declare class TranscriptionEntity extends OpenrouterModelsEntityBase<Transcription> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: TranscriptionEntity): TranscriptionEntity;
}
export { TranscriptionEntity };
