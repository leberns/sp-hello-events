import { IImageInfo } from "../../models/IImageInfo";

export interface IImagesLibService {
  fetchImageUrls(imageInfos: IImageInfo[]): Promise<void>;
}
