import { Unit } from "./unit";

export type VariationModelType = "color" | "number" | "text" | "select";

export interface Variation {
  _id: string;
  name: string;
  model: VariationModelType;
  values: string;
  options: any[];
  units: Unit[];
  productCategoryId: string;
}
