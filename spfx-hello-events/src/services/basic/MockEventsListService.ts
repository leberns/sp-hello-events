import { IEventsListService } from './IEventsListService';

export class MockEventsListService implements IEventsListService {

  constructor(eventItems?: any[]) {
    this.eventItems = !!eventItems ? eventItems : this.eventItems;
  }

  public static readonly evId = 1;
  public static readonly evTitle = 'EduCamp 2019';
  public static readonly evDescription = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.​';
  public static readonly evStart = '2019-06-20T07:00:00.000Z';
  public static readonly evEnd = '2019-06-21T15:00:00.000Z';
  public static readonly evCategoryRef = { Id: 2, Title: 'Education' };
  public static readonly evImageRef = { Id: 1 };
  public static readonly evLocation = JSON.stringify({
    DisplayName: 'Luzern Bahnhof',
    Address: {
      Street: 'Zentralstrasse 1',
      City: 'Luzern',
      CountryOrRegion: 'CH'
    }
  });

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
      HEvDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.​',
      HEvStart: new Date(2019, 7, 10, 8, 0).toISOString(),
      HEvEnd: new Date(2019, 7, 10, 16, 0).toISOString(),
      HEvCategoryRef: { Id: 1, Title: 'Sales' },
      HEvImageRef: { Id: 2 },
      HEvLocation: JSON.stringify({
        DisplayName: 'MCH Messe Schweiz (Zürich) AG',
        Address: {
          Street: 'Wallisellenstrasse 49',
          City: 'Zürich',
          CountryOrRegion: 'CH'
        }
      })
    }
    ,{
      Id: 3,
      Title: 'Marketing Workshop',
      HEvDescription: 'The marketing and sales teams perform a workshop.',
      HEvStart: new Date(2019, 6, 21, 9, 0).toISOString(),
      HEvEnd: new Date(2019, 6, 21, 11, 30).toISOString(),
      HEvCategoryRef: { Id: 1, Title: 'Sales' },
      HEvImageRef: { Id: 2 },
      HEvLocation: JSON.stringify({
        DisplayName: 'Kongresshaus Zürich',
        Address: {
          Street: 'Gotthardstrasse 5',
          City: 'Zürich',
          CountryOrRegion: 'CH'
        }
      })
    }
  ];

  private eventItemsWithNullData = [
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

  public getEventItems(): any[] {
    return this.eventItems;
  }

  public getEventItemsWithNullData(): any[] {
    return this.eventItemsWithNullData;
  }

  public async fetchEventItems(): Promise<any[]> {
    const p = Promise.resolve(this.eventItems);
    return p;
  }
}
