import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { BulkUnassignKey, BulkUnassignKeyCreateData } from '../OpenrouterModelsTypes';
declare class BulkUnassignKeyEntity extends OpenrouterModelsEntityBase<BulkUnassignKey> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: BulkUnassignKeyEntity): BulkUnassignKeyEntity;
    create(this: any, reqdata?: BulkUnassignKeyCreateData, ctrl?: Control): Promise<BulkUnassignKeyEntity>;
}
export { BulkUnassignKeyEntity };
