import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Endpoint, EndpointLoadMatch, EndpointListMatch } from '../OpenrouterModelsTypes';
declare class EndpointEntity extends OpenrouterModelsEntityBase<Endpoint> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: EndpointEntity): EndpointEntity;
    load(this: any, reqmatch?: EndpointLoadMatch, ctrl?: Control): Promise<EndpointEntity>;
    list(this: any, reqmatch?: EndpointListMatch, ctrl?: Control): Promise<EndpointEntity[]>;
}
export { EndpointEntity };
