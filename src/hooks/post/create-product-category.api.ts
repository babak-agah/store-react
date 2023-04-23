import * as yup from "yup";
import { api } from "@src/lib/axios";
import { IProductCategory } from "@src/types/IProduct-category";

export interface CreateProductCategoryForm {
  name: string;
  parent?: string;
  icon?: string;
}

export const createProductCategoryApi = (form: CreateProductCategoryForm) =>
  api.post<IProductCategory>("product-categories", form);

// v.min(3);

// v.max(10);

export const createProductCategoryValidation = yup.object().shape({
  name: yup.string().required().min(2).max(20),
});
