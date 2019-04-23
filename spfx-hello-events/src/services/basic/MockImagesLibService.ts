import { IImagesLibService } from './IImagesLibService';
import { IImageInfo } from '../../references';

export class MockImagesLibService implements IImagesLibService {

  public static readonly fileItem = { FileRef: '/sites/CompanyEvents/EventContentImages/team-event.jpeg' };

  public async fetchImageUrls(imageInfos: IImageInfo[]): Promise<void> {
    for(const imageInfo of imageInfos) {
      imageInfo.url = MockImagesLibService.fileItem.FileRef;
    }
  }
}
