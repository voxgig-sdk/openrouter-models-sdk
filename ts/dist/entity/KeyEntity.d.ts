import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Key, KeyListMatch } from '../OpenrouterModelsTypes';
declare class KeyEntity extends OpenrouterModelsEntityBase<Key> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: KeyEntity): KeyEntity;
    list(this: any, reqmatch?: KeyListMatch, ctrl?: Control): Promise<KeyEntity[]>;
}
export { KeyEntity };
