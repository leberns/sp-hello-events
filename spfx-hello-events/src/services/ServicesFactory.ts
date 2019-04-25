import { EventsListService } from "./basic/EventsListService";
import { ImagesLibService } from "./basic/ImagesLibService";
import { IEventsService } from "./events/IEventsService";
import { EventsService } from "./events/EventsService";
import { IEventsListService } from "./basic/IEventsListService";
import { IImagesLibService } from "./basic/IImagesLibService";

export class ServicesFactory {

    public createEventService(
      eventsListService: IEventsListService = new EventsListService,
      imagesLibService: IImagesLibService = new ImagesLibService,
      ): IEventsService {
      const eventsService = new EventsService(eventsListService, imagesLibService);
      return eventsService;
    }
  }
