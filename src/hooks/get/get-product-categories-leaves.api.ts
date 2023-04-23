import { api } from "@src/lib/axios";
import { IProductCategory } from "@src/types/IProduct-category";

interface Props {
  filter: { [key: string]: any };
}

export const getProductCategoriesLeavesApi = ({ filter }: Props) =>
  api.get<IProductCategory[]>(
    `product-categories/leaves?filter=${JSON.stringify(filter)}`
  );
