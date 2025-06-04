import { api } from "@src/lib/axios";
import { IProduct } from "@src/types/IProduct";
import { IProductItem } from "@src/types/IProduct-item";
import * as yup from "yup";

export interface ICreateProductItemForm
  extends Omit<IProductItem, "configurations"> {
  configurations: { variationId: string; values: any[] }[];
}

export const createProductItemApi = (
  productId: string,
  form: ICreateProductItemForm
) => {
  return api.post<IProduct>(`/products/product-items/${productId}`, form);
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
