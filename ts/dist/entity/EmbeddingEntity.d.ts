import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Embedding, EmbeddingCreateData } from '../OpenrouterModelsTypes';
declare class EmbeddingEntity extends OpenrouterModelsEntityBase<Embedding> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: EmbeddingEntity): EmbeddingEntity;
    create(this: any, reqdata?: EmbeddingCreateData, ctrl?: Control): Promise<EmbeddingEntity>;
}
export { EmbeddingEntity };
