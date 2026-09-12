import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Member } from '../OpenrouterModelsTypes';
declare class MemberEntity extends OpenrouterModelsEntityBase<Member> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: MemberEntity): MemberEntity;
}
export { MemberEntity };
