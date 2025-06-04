import { Address } from "./IAddress";

export type UserRole = "ADMIN" | "USER";

export interface User {
  _id: string;
  username: string;
  mobile: string;
  email: string;
  password: string;
  roles: UserRole[];
  addresses: Address[];
  shoppingCart: {
    products: [];
    _id: string;
  };
}
