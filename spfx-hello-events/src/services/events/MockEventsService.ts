import { IEvent, IEventsCollection } from "../../references";
import { IEventsService } from "./IEventsService";

export class MockEventsService implements IEventsService {

  constructor(events?: IEventsCollection) {
    this.events = !!events ? events : this.events;
  }

  public static readonly evId = 1;
  public static readonly evTitle = 'EduCamp 2019';
  public static readonly evDescription = 'One the first day we are having a workshop about Office 365 and on the second day a city tour.';
  public static readonly evStart = '2019-06-20T07:00:00.000Z';
  public static readonly evEnd = '2019-06-21T15:00:00.000Z';
  public static readonly evCategory = { id: 2, title: 'Education' };
  public static readonly evImageId = 1;
  public static readonly evImageUrl = '/sites/CompanyEvents/EventContentImages/team-event.jpeg';
  public static readonly evLocation = {
    name: 'Luzern Bahnhof',
    street: 'Zentralstrasse 1',
    city: 'Luzern',
    country: 'CH'
  };

  private events: IEventsCollection = { items: [
    {
      id: MockEventsService.evId,
      title: MockEventsService.evTitle,
      description: MockEventsService.evDescription,
      start: MockEventsService.evStart,
      end: MockEventsService.evEnd,
      category: MockEventsService.evCategory,
      imageId: MockEventsService.evImageId,
      imageUrl: MockEventsService.evImageUrl,
      location: MockEventsService.evLocation
    }
    ,{
      id: 2,
      title: 'Expo IT 2019',
      description: 'Exposition where we are showing our products to the public. MockEventsService.',
      start: new Date(2019, 7, 10, 8, 0).toISOString(),
      end: new Date(2019, 7, 10, 16, 0).toISOString(),
      category: { id: 2, title: 'Sales' },
      imageId: 2,
      imageUrl: '/sites/CompanyEvents/EventContentImages/team-event-2.jpeg',
      location: {
        name: 'MCH Messe Schweiz (Zürich) AG',
        street: 'Wallisellenstrasse 49',
        city: 'Zürich',
        country: 'CH'
      }
    }
  ]};

  private static eventsWithNullData: IEventsCollection = { items: [
    {
      id: MockEventsService.evId,
      title: MockEventsService.evTitle,
      description: null,
      start: null,
      end: null,
      category: null,
      imageId: null,
      imageUrl: null,
      location: null
    }
  ]};

  public static getEventsWithNullData(): IEventsCollection {
    return MockEventsService.eventsWithNullData;
  }

  public getEvents(): IEventsCollection {
    return this.events;
  }

  public getEventByIndex(index: number): IEvent {
    return this.events.items[index];
  }

  public fetchEvents(): Promise<IEventsCollection> {
      const events = this.events;
      return Promise.resolve(events);
  }
}
