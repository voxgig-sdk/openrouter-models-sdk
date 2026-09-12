import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { ListKeyAssignment, ListKeyAssignmentListMatch } from '../OpenrouterModelsTypes';
declare class ListKeyAssignmentEntity extends OpenrouterModelsEntityBase<ListKeyAssignment> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ListKeyAssignmentEntity): ListKeyAssignmentEntity;
    list(this: any, reqmatch?: ListKeyAssignmentListMatch, ctrl?: Control): Promise<ListKeyAssignmentEntity[]>;
}
export { ListKeyAssignmentEntity };
