import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { ListWorkspaceMember, ListWorkspaceMemberListMatch } from '../OpenrouterModelsTypes';
declare class ListWorkspaceMemberEntity extends OpenrouterModelsEntityBase<ListWorkspaceMember> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ListWorkspaceMemberEntity): ListWorkspaceMemberEntity;
    list(this: any, reqmatch?: ListWorkspaceMemberListMatch, ctrl?: Control): Promise<ListWorkspaceMemberEntity[]>;
}
export { ListWorkspaceMemberEntity };
