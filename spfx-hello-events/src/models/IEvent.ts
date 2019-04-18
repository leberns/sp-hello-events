import { ICategory } from "./ICategory";
import { ILocation } from "./ILocation";

export interface IEvent {
  id: number;
  title: string;
  description: string;
  start: string;
  end: string;
  category: ICategory;
  imageId?: number;
  imageUrl?: string;
  location?: ILocation;
}
