import { api } from "@src/lib/axios";
import { ProductCategory } from "@src/types/product-category";

export const getProductCategoryById = (id: string) =>
  api.get<ProductCategory>(`product-categories/${id}`);
