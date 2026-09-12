import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Preset, PresetLoadMatch, PresetListMatch } from '../OpenrouterModelsTypes';
declare class PresetEntity extends OpenrouterModelsEntityBase<Preset> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: PresetEntity): PresetEntity;
    load(this: any, reqmatch?: PresetLoadMatch, ctrl?: Control): Promise<PresetEntity>;
    list(this: any, reqmatch?: PresetListMatch, ctrl?: Control): Promise<PresetEntity[]>;
}
export { PresetEntity };
