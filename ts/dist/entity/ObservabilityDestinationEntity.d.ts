import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { ObservabilityDestination, ObservabilityDestinationLoadMatch, ObservabilityDestinationRemoveMatch } from '../OpenrouterModelsTypes';
declare class ObservabilityDestinationEntity extends OpenrouterModelsEntityBase<ObservabilityDestination> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ObservabilityDestinationEntity): ObservabilityDestinationEntity;
    load(this: any, reqmatch?: ObservabilityDestinationLoadMatch, ctrl?: Control): Promise<ObservabilityDestinationEntity>;
    remove(this: any, reqmatch?: ObservabilityDestinationRemoveMatch, ctrl?: Control): Promise<ObservabilityDestinationEntity>;
}
export { ObservabilityDestinationEntity };
