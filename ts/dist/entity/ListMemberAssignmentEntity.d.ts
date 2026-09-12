import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { ListMemberAssignment, ListMemberAssignmentListMatch } from '../OpenrouterModelsTypes';
declare class ListMemberAssignmentEntity extends OpenrouterModelsEntityBase<ListMemberAssignment> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ListMemberAssignmentEntity): ListMemberAssignmentEntity;
    list(this: any, reqmatch?: ListMemberAssignmentListMatch, ctrl?: Control): Promise<ListMemberAssignmentEntity[]>;
}
export { ListMemberAssignmentEntity };
