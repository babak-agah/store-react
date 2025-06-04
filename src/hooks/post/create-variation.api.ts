import { Variation, VariationModelType } from "../../types/Ivariation";
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
  name: textValidation({ min: 2, max: 20 }),
  model: textValidation({ required: true }),
  options: yup.array(),
  units: yup.array(),
});
