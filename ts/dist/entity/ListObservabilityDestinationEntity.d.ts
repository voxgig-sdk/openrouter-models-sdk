import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { ListObservabilityDestination, ListObservabilityDestinationListMatch } from '../OpenrouterModelsTypes';
declare class ListObservabilityDestinationEntity extends OpenrouterModelsEntityBase<ListObservabilityDestination> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ListObservabilityDestinationEntity): ListObservabilityDestinationEntity;
    list(this: any, reqmatch?: ListObservabilityDestinationListMatch, ctrl?: Control): Promise<ListObservabilityDestinationEntity[]>;
}
export { ListObservabilityDestinationEntity };
