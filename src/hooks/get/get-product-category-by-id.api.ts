import { api } from "@src/lib/axios";
import { IProductCategory } from "@src/types/IProduct-category";

export const getProductCategoryByIdApi = (id: string) =>
  api.get<IProductCategory>(`product-categories/${id}`);
