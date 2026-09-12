import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { ListPresetVersion, ListPresetVersionListMatch } from '../OpenrouterModelsTypes';
declare class ListPresetVersionEntity extends OpenrouterModelsEntityBase<ListPresetVersion> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ListPresetVersionEntity): ListPresetVersionEntity;
    list(this: any, reqmatch?: ListPresetVersionListMatch, ctrl?: Control): Promise<ListPresetVersionEntity[]>;
}
export { ListPresetVersionEntity };
