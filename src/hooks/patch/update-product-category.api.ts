import { textValidation } from "@src/validations/text.validation";
import * as yup from "yup";
import { api } from "@src/lib/axios";
import { ProductCategory } from "@src/types/product-category";
import { CreateProductCategoryForm } from "../post/create-product-category.api";

export interface UpdateProductCategoryForm
  extends Partial<CreateProductCategoryForm> {}

export const createProductCategoryApi = (form: UpdateProductCategoryForm) =>
  api.post<ProductCategory>("product-categories", form);

export const updateProductCategorySchema = yup.object().shape({
  name: textValidation({ min: 3, max: 20, required: false }),
  icon: textValidation({ required: false }),
});
