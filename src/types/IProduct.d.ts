import { IConfiguration } from "./IConfiguration";
import { IProductItem } from "./IProduct-item";

export interface IProduct {
  _id: string;
  categoryId: string;
  name: string;
  description?: string;
  price?: number;
  images?: string[];
  configurations: IConfiguration[];
  productItems: IProductItem[];
}
