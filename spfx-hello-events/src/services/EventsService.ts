import { sp } from "@pnp/sp";

import { IEventsCollection, IEvent } from "../references";
import { IEventsService } from "./IEventsService";
import { ILocation } from "../models/ILocation";
import { ICategory } from "../models/ICategory";

export class EventsService implements IEventsService {

  private readonly eventsListTitle = 'Events';
  private readonly imagesLibraryTitle = 'Event Content Images';

  public async fetchEvents(): Promise<IEventsCollection> {

    const eventItems = await this.fetchEventItems();
    const events = eventItems.map( eventItem => {

      const description = !!eventItem['HEvDescription'] ? eventItem['HEvDescription'] : '';

      const start = !!eventItem['HEvStart'] ? eventItem['HEvStart'] : new Date().toISOString();

      const end = !!eventItem['HEvEnd'] ? eventItem['HEvEnd'] : start;

      const category: ICategory = !!eventItem['HEvCategoryRef'] ? {
        id: eventItem['HEvCategoryRef'].Id,
        title: eventItem['HEvCategoryRef'].Title
      } : {
        id: 0,
        title: 'none'
      };

      const imageId = !!eventItem['HEvImageRef'] ? eventItem['HEvImageRef'].Id : null;

      const locationValue = JSON.parse(eventItem['HEvLocation']);
      const location: ILocation = !!locationValue ? {
          name: locationValue.DisplayName,
          street: locationValue.Address.Street,
          city: locationValue.Address.City,
          country: locationValue.Address.CountryOrRegion
      } : {
        name: '',
        street: '',
        city: '',
        country: ''
      };

      const event: IEvent = {
          id: eventItem.Id,
          title: eventItem['Title'],
          description: description,
          start: start,
          end: end,
          category: category,
          imageId: imageId,
          imageUrl: '',
          location: location
      };

      return event;
    });

    await this.fetchImageUrls(events);

    const eventsCollection: IEventsCollection = {
      items: events
    };

    return eventsCollection;
  }

  private async fetchEventItems() {
    const eventsList = sp.web.lists.getByTitle(this.eventsListTitle);
    const eventItems = await eventsList.items.orderBy('HEvStart').select('Id', 'Title', 'HEvDescription', 'HEvStart', 'HEvEnd', 'HEvCategoryRef/Id', 'HEvCategoryRef/Title', 'HEvImageRef/Id', 'HEvLocation').expand('HEvCategoryRef', 'HEvImageRef').getAll();
    return eventItems;
  }

  private async fetchImageUrls(events: IEvent[]): Promise<void> {
    const imagesLibrary = sp.web.lists.getByTitle(this.imagesLibraryTitle);
    for(const event of events) {
      if(!!event.imageId) {
        const fileItem = await imagesLibrary.items.getById(event.imageId).select('FileRef').get();
        event.imageUrl = fileItem.FileRef;
      }
    }
  }
}
