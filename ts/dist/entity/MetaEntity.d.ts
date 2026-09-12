import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Meta } from '../OpenrouterModelsTypes';
declare class MetaEntity extends OpenrouterModelsEntityBase<Meta> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: MetaEntity): MetaEntity;
}
export { MetaEntity };
