import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Byok, ByokLoadMatch, ByokListMatch, ByokCreateData, ByokRemoveMatch } from '../OpenrouterModelsTypes';
declare class ByokEntity extends OpenrouterModelsEntityBase<Byok> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ByokEntity): ByokEntity;
    load(this: any, reqmatch?: ByokLoadMatch, ctrl?: Control): Promise<ByokEntity>;
    list(this: any, reqmatch?: ByokListMatch, ctrl?: Control): Promise<ByokEntity[]>;
    create(this: any, reqdata?: ByokCreateData, ctrl?: Control): Promise<ByokEntity>;
    remove(this: any, reqmatch?: ByokRemoveMatch, ctrl?: Control): Promise<ByokEntity>;
}
export { ByokEntity };
