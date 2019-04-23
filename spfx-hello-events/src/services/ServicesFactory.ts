import { EventsListService } from "./basic/EventsListService";
import { ImagesLibService } from "./basic/ImagesLibService";
import { IEventsService } from "./events/IEventsService";
import { EventsService } from "./events/EventsService";
import { MockEventsListService } from "./basic/MockEventsListService";
import { MockImagesLibService } from "./basic/MockImagesLibService";
import { IEventsListService } from "./basic/IEventsListService";
import { IImagesLibService } from "./basic/IImagesLibService";

export class ServicesFactory {

    private isMocking: boolean;

    public setIsMocking(isMocking: boolean) {
      this.isMocking = isMocking;
    }

    public createEventService(): IEventsService {
      let eventsListService: IEventsListService;
      let imagesLibService: IImagesLibService;
      if(this.isMocking) {
        eventsListService = new MockEventsListService();
        imagesLibService = new MockImagesLibService();
      } else {
        eventsListService = new EventsListService();
        imagesLibService = new ImagesLibService();
      }
      const eventsService = new EventsService(eventsListService, imagesLibService);
      return eventsService;
    }
  }
