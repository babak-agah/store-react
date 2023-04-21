import { api } from "@src/lib/axios";
import { ProductCategory } from "@src/types/product-category";

export const getProductCategoryByIdApi = (id: string) =>
  api.get<ProductCategory>(`product-categories/${id}`);
