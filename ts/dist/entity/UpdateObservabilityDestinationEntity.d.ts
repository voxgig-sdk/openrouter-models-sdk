import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { UpdateObservabilityDestination, UpdateObservabilityDestinationUpdateData } from '../OpenrouterModelsTypes';
declare class UpdateObservabilityDestinationEntity extends OpenrouterModelsEntityBase<UpdateObservabilityDestination> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: UpdateObservabilityDestinationEntity): UpdateObservabilityDestinationEntity;
    update(this: any, reqdata?: UpdateObservabilityDestinationUpdateData, ctrl?: Control): Promise<UpdateObservabilityDestinationEntity>;
}
export { UpdateObservabilityDestinationEntity };
