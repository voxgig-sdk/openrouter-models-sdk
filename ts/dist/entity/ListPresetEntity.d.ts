import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { ListPreset } from '../OpenrouterModelsTypes';
declare class ListPresetEntity extends OpenrouterModelsEntityBase<ListPreset> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ListPresetEntity): ListPresetEntity;
}
export { ListPresetEntity };
