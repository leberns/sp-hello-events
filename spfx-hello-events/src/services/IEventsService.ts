import { IEventsCollection } from "../references";

export interface IEventsService {
    fetchEvents(): Promise<IEventsCollection>;
}
