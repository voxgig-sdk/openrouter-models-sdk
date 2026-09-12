import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { ApiKey, ApiKeyLoadMatch, ApiKeyListMatch, ApiKeyCreateData, ApiKeyUpdateData, ApiKeyRemoveMatch } from '../OpenrouterModelsTypes';
declare class ApiKeyEntity extends OpenrouterModelsEntityBase<ApiKey> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ApiKeyEntity): ApiKeyEntity;
    load(this: any, reqmatch?: ApiKeyLoadMatch, ctrl?: Control): Promise<ApiKeyEntity>;
    list(this: any, reqmatch?: ApiKeyListMatch, ctrl?: Control): Promise<ApiKeyEntity[]>;
    create(this: any, reqdata?: ApiKeyCreateData, ctrl?: Control): Promise<ApiKeyEntity>;
    update(this: any, reqdata?: ApiKeyUpdateData, ctrl?: Control): Promise<ApiKeyEntity>;
    remove(this: any, reqmatch?: ApiKeyRemoveMatch, ctrl?: Control): Promise<ApiKeyEntity>;
}
export { ApiKeyEntity };
