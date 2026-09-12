import { OpenrouterModelsEntityBase } from '../OpenrouterModelsEntityBase';
import type { OpenrouterModelsSDK } from '../OpenrouterModelsSDK';
import type { Control } from '../types';
import type { File, FileLoadMatch, FileListMatch, FileCreateData, FileRemoveMatch } from '../OpenrouterModelsTypes';
declare class FileEntity extends OpenrouterModelsEntityBase<File> {
    constructor(client: OpenrouterModelsSDK, entopts: any);
    make(this: FileEntity): FileEntity;
    load(this: any, reqmatch?: FileLoadMatch, ctrl?: Control): Promise<FileEntity>;
    list(this: any, reqmatch?: FileListMatch, ctrl?: Control): Promise<FileEntity[]>;
    create(this: any, reqdata?: FileCreateData, ctrl?: Control): Promise<FileEntity>;
    remove(this: any, reqmatch?: FileRemoveMatch, ctrl?: Control): Promise<FileEntity>;
}
export { FileEntity };
