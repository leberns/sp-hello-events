import 'jest';
import { IImageInfo } from '../../references';
import { ImagesLibService } from './ImagesLibService';

const fakeImagesLibrary = {
  items: {
    getById: (id: number) => {
      return {
        select: () => {
          return {
            get: async () => {
                return Promise.resolve({FileRef: `https://www.example.com/images/image-${id}.jpg`});
            }
          };
        }
      };
    }
  }
};

jest.mock('@pnp/sp', () => {
  return {
    sp: {
      web: {
        lists: {
          getByTitle: () => { return fakeImagesLibrary; }
        }
      }
    }
  };
});

describe('ImagesLibService', () => {

  it('should return the images library mock object', () => {
    const imagesLibService = new ImagesLibService();

    const libraryMock = imagesLibService.getImagesLibrary();

    expect(libraryMock).toBeDefined();
    expect(libraryMock === fakeImagesLibrary).toBeTruthy();
  });

  it('should fetch the URLs of the given images', async () => {
    const imagesLibService = new ImagesLibService();
    const imageInfos: IImageInfo[] = [
      {id: 1, url: ''},
      {id: 5, url: ''}
    ];
    const beforeLength = imageInfos.length;

    await imagesLibService.fetchImageUrls(imageInfos);

    expect(imageInfos.length).toBe(beforeLength);
    expect(imageInfos[0].url).toBe('https://www.example.com/images/image-1.jpg');
    expect(imageInfos[1].url).toBe('https://www.example.com/images/image-5.jpg');
  });
});
