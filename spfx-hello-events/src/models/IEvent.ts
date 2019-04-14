import { ICategory } from "./ICategory";
import { ILocation } from "./ILocation";

export interface IEvent {
  id: number;
  title: string;
  description: string;
  start: Date;
  end: Date;
  category: ICategory;
  imageId?: number;
  imageUrl?: string;
  location?: ILocation;
}
