import { textValidation } from "@src/validations/text.validation";
import * as yup from "yup";
import { api } from "@src/lib/axios";
import { ProductCategory } from "@src/types/product-category";

export interface CreateProductCategoryForm {
  name: string;
  parent?: string;
}

export const createProductCategoryApi = (form: CreateProductCategoryForm) =>
  api.post<ProductCategory>("product-categories", form);

export const createProductCategoryValidation = yup.object().shape({
  name: textValidation(3, 20),
});
