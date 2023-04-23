import { Unit } from "./unit";

export type VariationModelType = "color" | "number" | "text" | "select";

export interface IVariation {
  _id: string;
  name: string;
  model: VariationModelType;
  options: any[];
  units: Unit[];
  productCategoryId: string;
}
