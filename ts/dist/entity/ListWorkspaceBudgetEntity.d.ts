import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { ListWorkspaceBudget, ListWorkspaceBudgetListMatch } from '../OpenrouterModelsTypes';
declare class ListWorkspaceBudgetEntity extends OpenrouterModelsEntityBase<ListWorkspaceBudget> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ListWorkspaceBudgetEntity): ListWorkspaceBudgetEntity;
    list(this: any, reqmatch?: ListWorkspaceBudgetListMatch, ctrl?: Control): Promise<ListWorkspaceBudgetEntity[]>;
}
export { ListWorkspaceBudgetEntity };
