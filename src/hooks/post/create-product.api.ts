import { api } from "@src/lib/axios";
import { IConfiguration } from "@src/types/IConfiguration";
import { IProduct } from "@src/types/IProduct";
import * as yup from "yup";

export interface ICreateProductApi {
  name: string;
  description: string;
  price?: string;
  images: string[];
  configurations: IConfiguration[];
}

export const createProductApi = (
  categoryId: string,
  form: ICreateProductApi
) => {
  return api.post<IProduct>(`/products/${categoryId}`, form);
};

export const createProductShema = yup.object().shape({
  name: yup.string().required().min(2).max(20),
  description: yup.string(),
  price: yup.number(),
  images: yup.array(yup.string()),
  configurations: yup.array(),
});

// name: string;

// description: string;

// price: number;

// images: string;
