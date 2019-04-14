import { sp } from "@pnp/sp";

import { IEventsCollection, IEvent } from "../references";
import { IEventsService } from "./IEventsService";

export class EventsService implements IEventsService {

  private readonly eventsListTitle = 'Events';
  private readonly imagesLibraryTitle = 'Event Content Images';

  public async fetchEvents(): Promise<IEventsCollection> {

    const eventItems = await this.fetchEventItems();
    const events = eventItems.map( eventItem => {

      const locationValue = JSON.parse(eventItem['HEvLocation']);
      const event: IEvent = {
          id: eventItem.Id,
          title: eventItem['Title'],
          description: eventItem['HEvDescription'],
          start: eventItem['HEvStart'],
          end: eventItem['HEvEnd'],
          category: {
            id: eventItem['HEvCategoryRef'].Id,
            title: eventItem['HEvCategoryRef'].Title
          },
          imageId: eventItem['HEvImageRef'].Id,
          imageUrl: '',
          location: {
            name: locationValue.DisplayName,
            street: locationValue.Address.Street,
            city: locationValue.Address.City,
            country: locationValue.Address.CountryOrRegion
          }
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
      const fileItem = await imagesLibrary.items.getById(event.id).select('FileRef').get();
      event.imageUrl = fileItem.FileRef;
    }
  }

  public fetchEventsPromise(): Promise<IEventsCollection> {

      const p = new Promise<IEventsCollection>((resolve, reject) => {

          const list = sp.web.lists.getByTitle(this.eventsListTitle);
          const pQueryEvents = list.items.orderBy('HEvStart').select('Id', 'Title', 'HEvDescription', 'HEvStart', 'HEvEnd', 'HEvCategoryRef/Id', 'HEvCategoryRef/Title', 'HEvImageRef/Id', 'HEvLocation').expand('HEvCategoryRef', 'HEvImageRef').getAll();
          pQueryEvents.then( eventItems => {

              const helloEvents = eventItems.map( eventItem => {

                  const locationValue = JSON.parse(eventItem['EvtLocation']);
                  const event: IEvent = {
                    id: eventItem.Id,
                    title: eventItem['Title'],
                    description: eventItem['HEvDescription'],
                    start: eventItem['HEvStart'],
                    end: eventItem['HEvEnd'],
                    category: {
                      id: eventItem['HEvCategoryRef'].Id,
                      title: eventItem['HEvCategoryRef'].Title
                    },
                    imageId: eventItem['HEvImageRef'].Id,
                    imageUrl: '',
                    location: {
                      name: locationValue.DisplayName,
                      street: locationValue.Address.Street,
                      city: locationValue.Address.City,
                      country: locationValue.Address.CountryOrRegion
                    }
                            };

                  return event;
              });
              const eventsCollection: IEventsCollection = {
                  items: helloEvents
              };
              resolve(eventsCollection);

          }).catch(error => reject(error));
      });

      return p;
  }
}
