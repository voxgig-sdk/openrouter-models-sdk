import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { Member, MemberListMatch } from '../OpenrouterModelsTypes';
declare class MemberEntity extends OpenrouterModelsEntityBase<Member> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: MemberEntity): MemberEntity;
    list(this: any, reqmatch?: MemberListMatch, ctrl?: Control): Promise<MemberEntity[]>;
}
export { MemberEntity };
