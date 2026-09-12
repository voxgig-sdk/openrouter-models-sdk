import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Message, MessageCreateData } from '../OpenrouterModelsTypes';
declare class MessageEntity extends OpenrouterModelsEntityBase<Message> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: MessageEntity): MessageEntity;
    create(this: any, reqdata?: MessageCreateData, ctrl?: Control): Promise<MessageEntity>;
}
export { MessageEntity };
