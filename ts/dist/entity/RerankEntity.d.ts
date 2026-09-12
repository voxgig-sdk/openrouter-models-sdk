import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Rerank, RerankCreateData } from '../OpenrouterModelsTypes';
declare class RerankEntity extends OpenrouterModelsEntityBase<Rerank> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: RerankEntity): RerankEntity;
    create(this: any, reqdata?: RerankCreateData, ctrl?: Control): Promise<RerankEntity>;
}
export { RerankEntity };
