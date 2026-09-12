import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Query } from '../OpenrouterModelsTypes';
declare class QueryEntity extends OpenrouterModelsEntityBase<Query> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: QueryEntity): QueryEntity;
}
export { QueryEntity };
