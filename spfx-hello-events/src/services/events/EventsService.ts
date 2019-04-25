import { IEventsCollection, IEvent } from "../../references";
import { IEventsService } from "./IEventsService";
import { IEventsListService } from "../basic/IEventsListService";
import { IImagesLibService } from "../basic/IImagesLibService";
import { ILocation } from "../../models/ILocation";
import { ICategory } from "../../models/ICategory";

export class EventsService implements IEventsService {

  constructor(private eventsListService: IEventsListService, private imagesLibService: IImagesLibService) { }

  public async fetchEvents(): Promise<IEventsCollection> {

    const eventItems = await this.eventsListService.fetchEventItems();
    const events = eventItems.map(eventItem => {

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

    const eventsCollection: IEventsCollection = {
      items: events
    };

    await this.retrieveImageUrls(eventsCollection);

    return eventsCollection;
  }

  private async retrieveImageUrls(eventsCollection: IEventsCollection): Promise<void> {
    const imageIds = [];
    for(let event of eventsCollection.items) {
      if(!event.imageId) {
        continue;
      }

      const alreadyPresent = imageIds.some(img => img.id === event.imageId);
      if(alreadyPresent) {
        continue;
      }

      const imageInfo = {
        id: event.imageId,
        url: ''
      };
      imageIds.push(imageInfo);
    }

    await this.imagesLibService.fetchImageUrls(imageIds);

    for(let event of eventsCollection.items) {
      if(!event.imageId) {
        continue;
      }

      const imageInfos = imageIds.filter(img => img.id === event.imageId);
      if(imageInfos.length === 0) {
        continue;
      }

      event.imageUrl = imageInfos[0].url;
    }
  }
}
