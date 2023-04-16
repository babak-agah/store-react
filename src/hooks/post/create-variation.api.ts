import { Variation, VariationModelType } from "./../../types/variation.d";
import { textValidation } from "@src/validations/text.validation";
import * as yup from "yup";
import { api } from "@src/lib/axios";

export interface CreateVariationForm {
  name: string;
  model: VariationModelType;
  options: any[];
  units: string[];
}

export const createVariationApi = (
  productCategoryId: string,
  form: CreateVariationForm
) => api.post<Variation>(`variations/${productCategoryId}`, form);

export const createVariationValidation = yup.object().shape({
  name: textValidation(2, 20),
  model: yup.string(),
  options: yup.array(),
  units: yup.array(),
});
