import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Version } from '../OpenrouterModelsTypes';
declare class VersionEntity extends OpenrouterModelsEntityBase<Version> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: VersionEntity): VersionEntity;
}
export { VersionEntity };
