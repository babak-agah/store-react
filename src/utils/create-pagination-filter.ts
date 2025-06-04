import { IPaginationFilter } from "@src/types/IPagination";

export const createPaginationFilter = ({ page, count }: IPaginationFilter) => {
  return `page=${page}&count=${count}`;
};
