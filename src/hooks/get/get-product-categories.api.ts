import { api } from "@src/lib/axios";
import { ProductCategory } from "@src/types/product-category";

interface Props {
  filter: { [key: string]: any };
}

export const getProductCategories = ({ filter }: Props) =>
  api.get<ProductCategory[]>(
    `product-categories?filter=${JSON.stringify(filter)}`
  );
