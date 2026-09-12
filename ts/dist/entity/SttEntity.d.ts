import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Stt, SttCreateData } from '../OpenrouterModelsTypes';
declare class SttEntity extends OpenrouterModelsEntityBase<Stt> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: SttEntity): SttEntity;
    create(this: any, reqdata?: SttCreateData, ctrl?: Control): Promise<SttEntity>;
}
export { SttEntity };
