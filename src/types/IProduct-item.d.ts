import { IProductItemStateses } from "./IProductItemStatuses";

export interface IProductItem {
  name: string;
  sku: string;
  qtyInStock: number;
  price: number;
  images: string[];
  status: IProductItemStateses;
  configurations: IConfiguration[];
}
