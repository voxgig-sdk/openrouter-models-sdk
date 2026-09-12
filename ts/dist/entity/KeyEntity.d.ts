import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Key } from '../OpenrouterModelsTypes';
declare class KeyEntity extends OpenrouterModelsEntityBase<Key> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: KeyEntity): KeyEntity;
}
export { KeyEntity };
