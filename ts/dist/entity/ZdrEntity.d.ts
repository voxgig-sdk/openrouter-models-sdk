import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Zdr } from '../OpenrouterModelsTypes';
declare class ZdrEntity extends OpenrouterModelsEntityBase<Zdr> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ZdrEntity): ZdrEntity;
}
export { ZdrEntity };
