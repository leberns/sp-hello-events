import { IEventsListService } from './IEventsListService';

export class MockEventsListService implements IEventsListService {

  public static readonly evId = 1;
  public static readonly evTitle = 'EduCamp 2019';
  public static readonly evDescription = 'One the first day we are having a workshop about Office 365 and on the second day a city tour.';
  public static readonly evStart = '2019-06-20T07:00:00.000Z';
  public static readonly evEnd = '2019-06-21T15:00:00.000Z';
  public static readonly evCategoryRef = { Id: 2, Title: 'Education' };
  public static readonly evImageRef = { Id: 1 };
  public static readonly evLocation = {
    DisplayName: 'Luzern Bahnhof',
    Address: {
      Street: 'Zentralstrasse 1',
      City: 'Luzern',
      CountryOrRegion: 'CH'
    }
  };

  private eventItems = [
    {
      Id: MockEventsListService.evId,
      Title: MockEventsListService.evTitle,
      HEvDescription: MockEventsListService.evDescription,
      HEvStart: MockEventsListService.evStart,
      HEvEnd: MockEventsListService.evEnd,
      HEvCategoryRef: MockEventsListService.evCategoryRef,
      HEvImageRef: MockEventsListService.evImageRef,
      HEvLocation: MockEventsListService.evLocation
    }
    ,{
      Id: 2,
      Title: 'Expo IT',
      HEvDescription: 'Exposition where we are showing our products to the public.',
      HEvStart: new Date(2019, 7, 10, 8, 0).toISOString(),
      HEvEnd: new Date(2019, 7, 10, 16, 0).toISOString(),
      HEvCategoryRef: { Id: 1, Title: 'Sales' },
      HEvImageRef: { Id: 2 },
      HEvLocation: {
        DisplayName: 'MCH Messe Schweiz (Zürich) AG',
        Address: {
          Street: 'Wallisellenstrasse 49',
          City: 'Zürich',
          CountryOrRegion: 'CH'
        }
      }
    }
  ];

  private static eventItemsWithNullData = [
    {
      Id: MockEventsListService.evId,
      Title: MockEventsListService.evTitle,
      HEvDescription: null,
      HEvStart: null,
      HEvEnd: null,
      HEvCategoryRef: null,
      HEvImageRef: null,
      HEvLocation: null
    }
  ];

  public async fetchEventItems(): Promise<any[]> {
    const p = Promise.resolve(this.eventItems);
    return p;
  }
}
