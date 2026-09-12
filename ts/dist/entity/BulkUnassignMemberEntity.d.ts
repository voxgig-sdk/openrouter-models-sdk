import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { BulkUnassignMember, BulkUnassignMemberCreateData } from '../OpenrouterModelsTypes';
declare class BulkUnassignMemberEntity extends OpenrouterModelsEntityBase<BulkUnassignMember> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: BulkUnassignMemberEntity): BulkUnassignMemberEntity;
    create(this: any, reqdata?: BulkUnassignMemberCreateData, ctrl?: Control): Promise<BulkUnassignMemberEntity>;
}
export { BulkUnassignMemberEntity };
