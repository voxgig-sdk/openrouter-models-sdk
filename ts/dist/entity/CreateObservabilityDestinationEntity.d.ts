import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { CreateObservabilityDestination, CreateObservabilityDestinationCreateData } from '../OpenrouterModelsTypes';
declare class CreateObservabilityDestinationEntity extends OpenrouterModelsEntityBase<CreateObservabilityDestination> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: CreateObservabilityDestinationEntity): CreateObservabilityDestinationEntity;
    create(this: any, reqdata?: CreateObservabilityDestinationCreateData, ctrl?: Control): Promise<CreateObservabilityDestinationEntity>;
}
export { CreateObservabilityDestinationEntity };
