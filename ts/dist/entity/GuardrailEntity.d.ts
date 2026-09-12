import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Guardrail, GuardrailLoadMatch, GuardrailListMatch, GuardrailCreateData, GuardrailRemoveMatch } from '../OpenrouterModelsTypes';
declare class GuardrailEntity extends OpenrouterModelsEntityBase<Guardrail> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: GuardrailEntity): GuardrailEntity;
    load(this: any, reqmatch?: GuardrailLoadMatch, ctrl?: Control): Promise<GuardrailEntity>;
    list(this: any, reqmatch?: GuardrailListMatch, ctrl?: Control): Promise<GuardrailEntity[]>;
    create(this: any, reqdata?: GuardrailCreateData, ctrl?: Control): Promise<GuardrailEntity>;
    remove(this: any, reqmatch?: GuardrailRemoveMatch, ctrl?: Control): Promise<GuardrailEntity>;
}
export { GuardrailEntity };
