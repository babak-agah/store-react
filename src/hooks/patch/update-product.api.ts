import { api } from "@src/lib/axios";
import { IProduct } from "@src/types/IProduct";
import { ICreateProductApi } from "../post/create-product.api";

export const updateProductApi = (
  productId: string,
  form: Partial<ICreateProductApi>
) => {
  return api.patch<IProduct>(`products/${productId}`, form);
};
