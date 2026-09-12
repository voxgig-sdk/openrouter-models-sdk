import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Destination } from '../OpenrouterModelsTypes';
declare class DestinationEntity extends OpenrouterModelsEntityBase<Destination> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: DestinationEntity): DestinationEntity;
}
export { DestinationEntity };
