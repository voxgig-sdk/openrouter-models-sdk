import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { WorkspaceMember, WorkspaceMemberListMatch } from '../OpenrouterModelsTypes';
declare class WorkspaceMemberEntity extends OpenrouterModelsEntityBase<WorkspaceMember> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: WorkspaceMemberEntity): WorkspaceMemberEntity;
    list(this: any, reqmatch?: WorkspaceMemberListMatch, ctrl?: Control): Promise<WorkspaceMemberEntity[]>;
}
export { WorkspaceMemberEntity };
