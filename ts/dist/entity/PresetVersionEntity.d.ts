import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { PresetVersion, PresetVersionLoadMatch } from '../OpenrouterModelsTypes';
declare class PresetVersionEntity extends OpenrouterModelsEntityBase<PresetVersion> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: PresetVersionEntity): PresetVersionEntity;
    load(this: any, reqmatch?: PresetVersionLoadMatch, ctrl?: Control): Promise<PresetVersionEntity>;
}
export { PresetVersionEntity };
