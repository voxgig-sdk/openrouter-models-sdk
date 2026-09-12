import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Budget } from '../OpenrouterModelsTypes';
declare class BudgetEntity extends OpenrouterModelsEntityBase<Budget> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: BudgetEntity): BudgetEntity;
}
export { BudgetEntity };
