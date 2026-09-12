import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { ChatResult, ChatResultCreateData } from '../OpenrouterModelsTypes';
declare class ChatResultEntity extends OpenrouterModelsEntityBase<ChatResult> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: ChatResultEntity): ChatResultEntity;
    create(this: any, reqdata?: ChatResultCreateData, ctrl?: Control): Promise<ChatResultEntity>;
}
export { ChatResultEntity };
