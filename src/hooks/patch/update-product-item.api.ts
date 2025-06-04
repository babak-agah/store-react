import { api } from "@src/lib/axios";
import { IProduct } from "@src/types/IProduct";
import * as yup from "yup";
import { ICreateProductItemForm } from "../post/create-product-item.api";

export const updateProductItemApi = (
  productId: string,
  form: ICreateProductItemForm
) => {
  return api.patch<IProduct>(`/products/product-items/${productId}`, form);
};

export const createProductItemShema = yup.object().shape({
  name: yup.string().required().min(2).max(20),
  qtyInStock: yup.number().min(0),
  sku: yup.string().min(2),
  price: yup.number().min(0),
  images: yup.array(yup.string()),
  status: yup.number().oneOf([0, 1]),
  configurations: yup.array(),
});
