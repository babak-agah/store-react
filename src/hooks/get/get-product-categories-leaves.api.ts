import { api } from "@src/lib/axios";
import { ProductCategory } from "@src/types/product-category";

interface Props {
  filter: { [key: string]: any };
}

export const getProductCategoriesLeavesApi = ({ filter }: Props) =>
  api.get<ProductCategory[]>(
    `product-categories/leaves?filter=${JSON.stringify(filter)}`
  );
