import { sp } from "@pnp/sp";

import { IImageInfo } from "../../references";
import { IImagesLibService } from "./IImagesLibService";

export class ImagesLibService implements IImagesLibService {

  private readonly imagesLibraryTitle = 'Event Content Images';

  public async fetchImageUrls(imageInfos: IImageInfo[]): Promise<void> {
    const imagesLibrary = this.getImagesLibrary();
    for(const imageInfo of imageInfos) {
      const fileItem = await imagesLibrary.items.getById(imageInfo.id).select('FileRef').get();
      imageInfo.url = fileItem.FileRef;
    }
  }

  public getImagesLibrary(): any {
    const imagesLibrary = sp.web.lists.getByTitle(this.imagesLibraryTitle);
    return imagesLibrary;
  }
}
