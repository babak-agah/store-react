import { textValidation } from "@src/validations/text.validation";
import * as yup from "yup";
import { User } from "@src/types/user";
import { api } from "@src/lib/axios";

// baseurl is http://example/api/

export interface SigninFormApi {
  username: string;
  password: string;
}

export interface SigninResponseApi {
  user: User;
  refreshToken: string;
  accessToken: string;
}

export const signinApi = (form: SigninFormApi) =>
  api.post<SigninResponseApi>("auth/signin", form);

export const signinFormValidation = yup.object().shape({
  username: textValidation(3, 20),
  password: textValidation(6, 20),
});
