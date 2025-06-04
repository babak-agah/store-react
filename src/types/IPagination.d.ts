export interface IPaginationResponse<T> {
  totalCount: number;
  count: number;
  items: T[];
}

export interface IPaginationFilter {
  count: number;
  page: number;
}
