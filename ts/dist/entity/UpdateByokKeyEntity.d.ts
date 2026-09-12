import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { UpdateByokKey, UpdateByokKeyUpdateData } from '../OpenrouterModelsTypes';
declare class UpdateByokKeyEntity extends OpenrouterModelsEntityBase<UpdateByokKey> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: UpdateByokKeyEntity): UpdateByokKeyEntity;
    update(this: any, reqdata?: UpdateByokKeyUpdateData, ctrl?: Control): Promise<UpdateByokKeyEntity>;
}
export { UpdateByokKeyEntity };
