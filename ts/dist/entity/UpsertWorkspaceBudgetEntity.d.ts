import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { UpsertWorkspaceBudget, UpsertWorkspaceBudgetUpdateData } from '../OpenrouterModelsTypes';
declare class UpsertWorkspaceBudgetEntity extends OpenrouterModelsEntityBase<UpsertWorkspaceBudget> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: UpsertWorkspaceBudgetEntity): UpsertWorkspaceBudgetEntity;
    update(this: any, reqdata?: UpsertWorkspaceBudgetUpdateData, ctrl?: Control): Promise<UpsertWorkspaceBudgetEntity>;
}
export { UpsertWorkspaceBudgetEntity };
