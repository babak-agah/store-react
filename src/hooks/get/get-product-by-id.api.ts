import { api } from "@src/lib/axios";
import { IProduct } from "@src/types/IProduct";

export const getProductByIdApi = (id: string) => {
  return api.get<IProduct>(`/products/${id}`);
};
