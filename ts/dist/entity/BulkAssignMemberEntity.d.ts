import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { BulkAssignMember, BulkAssignMemberCreateData } from '../OpenrouterModelsTypes';
declare class BulkAssignMemberEntity extends OpenrouterModelsEntityBase<BulkAssignMember> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: BulkAssignMemberEntity): BulkAssignMemberEntity;
    create(this: any, reqdata?: BulkAssignMemberCreateData, ctrl?: Control): Promise<BulkAssignMemberEntity>;
}
export { BulkAssignMemberEntity };
