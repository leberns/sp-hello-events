import { IEventsService } from "./IEventsService";
import { EventsService } from "./EventsService";
import { MockEventsService } from "./MockEventsService";

export class ServicesFactory {

    private isLocalEnvironmentType: boolean;

    public setLocalEnvironment(isLocal: boolean) {
      this.isLocalEnvironmentType = isLocal;
    }

    public createEventService(): IEventsService {
      let eventsService: IEventsService;
      if(this.isLocalEnvironmentType) {
        eventsService = new MockEventsService();
      } else {
        eventsService = new EventsService();
      }
      return eventsService;
    }
}
