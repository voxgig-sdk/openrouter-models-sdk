import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { BulkAssignKey, BulkAssignKeyCreateData } from '../OpenrouterModelsTypes';
declare class BulkAssignKeyEntity extends OpenrouterModelsEntityBase<BulkAssignKey> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: BulkAssignKeyEntity): BulkAssignKeyEntity;
    create(this: any, reqdata?: BulkAssignKeyCreateData, ctrl?: Control): Promise<BulkAssignKeyEntity>;
}
export { BulkAssignKeyEntity };
