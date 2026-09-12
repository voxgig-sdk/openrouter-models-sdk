import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Code } from '../OpenrouterModelsTypes';
declare class CodeEntity extends OpenrouterModelsEntityBase<Code> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: CodeEntity): CodeEntity;
}
export { CodeEntity };
