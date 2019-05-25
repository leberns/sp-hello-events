import { IEvent, IEventsCollection } from "../../references";
import { IEventsService } from "./IEventsService";
import { MockEventsListService } from "../basic/MockEventsListService";

export class MockEventsService implements IEventsService {

  constructor(events?: IEventsCollection) {
    this.events = !!events ? events : this.events;
  }

  public static readonly evImageUrl = '/sites/CompanyEvents/EventContentImages/team-event.jpeg';
  public static readonly evLocation = {
    name: 'Luzern Bahnhof',
    street: 'Zentralstrasse 1',
    city: 'Luzern',
    country: 'CH'
  };

  private events: IEventsCollection = [
    {
      id: MockEventsListService.evId,
      title: MockEventsListService.evTitle,
      description: MockEventsListService.evDescription,
      start: MockEventsListService.evStart,
      end: MockEventsListService.evEnd,
      category: {
        id: MockEventsListService.evCategoryRef.Id,
        title: MockEventsListService.evCategoryRef.Title
      },
      imageId: MockEventsListService.evImageRef.Id,
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
  ];

  private static eventsWithNullData: IEventsCollection = [
    {
      id: MockEventsListService.evId,
      title: MockEventsListService.evTitle,
      description: null,
      start: null,
      end: null,
      category: null,
      imageId: null,
      imageUrl: null,
      location: null
    }
  ];

  public static getEventsWithNullData(): IEventsCollection {
    return MockEventsService.eventsWithNullData;
  }

  public getEvents(): IEventsCollection {
    return this.events;
  }

  public getEventByIndex(index: number): IEvent {
    return this.events[index];
  }

  public fetchEvents(): Promise<IEventsCollection> {
      const events = this.events;
      return Promise.resolve(events);
  }
}
