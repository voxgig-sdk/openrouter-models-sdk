import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { WorkspaceBudget, WorkspaceBudgetListMatch, WorkspaceBudgetRemoveMatch } from '../OpenrouterModelsTypes';
declare class WorkspaceBudgetEntity extends OpenrouterModelsEntityBase<WorkspaceBudget> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: WorkspaceBudgetEntity): WorkspaceBudgetEntity;
    list(this: any, reqmatch?: WorkspaceBudgetListMatch, ctrl?: Control): Promise<WorkspaceBudgetEntity[]>;
    remove(this: any, reqmatch?: WorkspaceBudgetRemoveMatch, ctrl?: Control): Promise<WorkspaceBudgetEntity>;
}
export { WorkspaceBudgetEntity };
