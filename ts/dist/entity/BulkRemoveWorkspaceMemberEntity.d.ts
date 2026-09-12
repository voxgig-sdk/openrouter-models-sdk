import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { BulkRemoveWorkspaceMember, BulkRemoveWorkspaceMemberCreateData } from '../OpenrouterModelsTypes';
declare class BulkRemoveWorkspaceMemberEntity extends OpenrouterModelsEntityBase<BulkRemoveWorkspaceMember> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: BulkRemoveWorkspaceMemberEntity): BulkRemoveWorkspaceMemberEntity;
    create(this: any, reqdata?: BulkRemoveWorkspaceMemberCreateData, ctrl?: Control): Promise<BulkRemoveWorkspaceMemberEntity>;
}
export { BulkRemoveWorkspaceMemberEntity };
