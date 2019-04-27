import { IEventsService } from "../../../../services/events/IEventsService";

export interface IHelloEventsProps {
  updateAppStatus: Function;
  eventsService: IEventsService;
}
