import { inject, injectable } from "tsyringe";
import { File, UploadedFile } from "../../models/files";
import { FileUpload } from "../../domain/usecases/file-upload";
import { FileUploader } from "./file-uploader";

@injectable()
export class RemoteFileUpload implements FileUpload {
    constructor(
        @inject("FileUploader")
        private readonly fileUploader: FileUploader
    ) {}

    async upload(files: File[]): Promise<UploadedFile[]> {
        const uploadedFiles = await this.fileUploader.upload(files);

        if (!uploadedFiles) {
            throw new Error('Something bad happened');
        }

        return uploadedFiles as UploadedFile[];
    }
}