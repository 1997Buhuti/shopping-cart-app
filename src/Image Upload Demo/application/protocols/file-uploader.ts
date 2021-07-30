import { File, UploadedFile } from "../../models/files";

export interface FileUploader {
    upload: (
        files: File | File[]
    ) => Promise<UploadedFile | UploadedFile[] | undefined>;
}