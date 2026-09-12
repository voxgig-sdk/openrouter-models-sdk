import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Response } from '../OpenrouterModelsTypes';
declare class ResponseEntity extends OpenrouterModelsEntityBase<Response> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ResponseEntity): ResponseEntity;
}
export { ResponseEntity };
