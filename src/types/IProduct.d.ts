import { IConfiguration } from "./IConfiguration";

export interface IProduct {
  _id: string;
  categoryId: string;
  name: string;
  description?: string;
  price?: number;
  images?: string[];
  configurations: IConfiguration[];
}
