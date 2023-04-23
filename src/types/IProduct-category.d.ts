import { Variation } from "./Ivariation";

export interface IProductCategory {
  _id: string;
  name: string;
  parent?: IProductCategory;
  ancestors: IProductCategory[];
  variations: Variation[];
  icon?: string;
}
