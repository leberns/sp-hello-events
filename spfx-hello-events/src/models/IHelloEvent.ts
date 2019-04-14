import { ICategory } from "./ICategory";
import { ILocation } from "./ILocation";

export interface IHelloEvent {
  eventId: number;
  title: string;
  mainText: string;
  when: Date;
  category: ICategory;
  imageId?: number;
  imageUrl?: string;
  location?: ILocation;
}
