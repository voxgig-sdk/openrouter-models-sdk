import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Tts, TtsCreateData } from '../OpenrouterModelsTypes';
declare class TtsEntity extends OpenrouterModelsEntityBase<Tts> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: TtsEntity): TtsEntity;
    create(this: any, reqdata?: TtsCreateData, ctrl?: Control): Promise<TtsEntity>;
}
export { TtsEntity };
