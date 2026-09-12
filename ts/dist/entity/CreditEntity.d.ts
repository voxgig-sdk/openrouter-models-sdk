import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Credit, CreditLoadMatch, CreditCreateData } from '../OpenrouterModelsTypes';
declare class CreditEntity extends OpenrouterModelsEntityBase<Credit> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: CreditEntity): CreditEntity;
    load(this: any, reqmatch?: CreditLoadMatch, ctrl?: Control): Promise<CreditEntity>;
    create(this: any, reqdata?: CreditCreateData, ctrl?: Control): Promise<CreditEntity>;
}
export { CreditEntity };
