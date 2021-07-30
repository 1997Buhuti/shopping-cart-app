import { File, UploadedFile } from "../../models/files";

export interface FileUpload {
    upload: (files: File[]) => Promise<UploadedFile[]>;
}