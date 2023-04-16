import { Variation } from "./variation";

export interface ProductCategory {
  _id: string;
  name: string;
  parent?: ProductCategory;
  ancestors: ProductCategory[];
  variations: Variation[];
}
