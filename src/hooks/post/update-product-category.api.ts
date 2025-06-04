import * as yup from "yup";
import { api } from "@src/lib/axios";
import { IProductCategory } from "@src/types/IProduct-category";

export interface UpdateProductCategoryForm {
  name: string;
  parent?: string;
  icon?: string;
}

export const updateProductCategoryApi = (
  id: string,
  form: UpdateProductCategoryForm
) => api.patch<IProductCategory>(`product-categories/${id}`, form);

export const updateProductCategorySchema = yup.object().shape({
  name: yup.string().required().min(2).max(20),
});
