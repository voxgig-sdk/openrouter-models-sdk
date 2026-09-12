import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { BulkAddWorkspaceMember, BulkAddWorkspaceMemberCreateData } from '../OpenrouterModelsTypes';
declare class BulkAddWorkspaceMemberEntity extends OpenrouterModelsEntityBase<BulkAddWorkspaceMember> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: BulkAddWorkspaceMemberEntity): BulkAddWorkspaceMemberEntity;
    create(this: any, reqdata?: BulkAddWorkspaceMemberCreateData, ctrl?: Control): Promise<BulkAddWorkspaceMemberEntity>;
}
export { BulkAddWorkspaceMemberEntity };
