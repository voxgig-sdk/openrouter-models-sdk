import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Provider, ProviderListMatch } from '../OpenrouterModelsTypes';
declare class ProviderEntity extends OpenrouterModelsEntityBase<Provider> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ProviderEntity): ProviderEntity;
    list(this: any, reqmatch?: ProviderListMatch, ctrl?: Control): Promise<ProviderEntity[]>;
}
export { ProviderEntity };
