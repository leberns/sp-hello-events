import { IEventsCollection } from "../references";
import { IEventsService } from "./IEventsService";

export class MockEventsService implements IEventsService {

  private static events: IEventsCollection = { items: [
  ]};

  public fetchEvents(): Promise<IEventsCollection> {
      return Promise.resolve(MockEventsService.events);
  }
}
