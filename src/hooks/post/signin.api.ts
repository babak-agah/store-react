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
  username: textValidation({ min: 3, max: 20 }),
  password: textValidation({ min: 6, max: 20 }),
});
