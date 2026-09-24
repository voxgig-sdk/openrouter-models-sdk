import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Response, ResponseCreateData } from '../OpenrouterModelsTypes';
declare class ResponseEntity extends OpenrouterModelsEntityBase<Response> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ResponseEntity): ResponseEntity;
    create(this: any, reqdata?: ResponseCreateData, ctrl?: Control): Promise<ResponseEntity>;
}
export { ResponseEntity };
