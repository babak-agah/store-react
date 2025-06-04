import { api } from "@src/lib/axios";
import { IPaginationFilter, IPaginationResponse } from "@src/types/IPagination";
import { IProduct } from "@src/types/IProduct";
import { createPaginationFilter } from "@src/utils/create-pagination-filter";

export const getProductsApi = (pagination: IPaginationFilter) => {
  return api.get<IPaginationResponse<IProduct>>(
    `/products?${createPaginationFilter(pagination)}`
  );
};
