import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { OAuth, OAuthCreateData } from '../OpenrouterModelsTypes';
declare class OAuthEntity extends OpenrouterModelsEntityBase<OAuth> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: OAuthEntity): OAuthEntity;
    create(this: any, reqdata?: OAuthCreateData, ctrl?: Control): Promise<OAuthEntity>;
}
export { OAuthEntity };
