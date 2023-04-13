import { textValidation } from "@src/validations/text.validation";

import * as yup from "yup";
import { nextApi } from "@src/lib/axios";

export interface RefreshTokenApi {
  refreshToken: string;
}

export interface RefreshTokenApiResponseApi {}

export const refreshTokenApi = (form: RefreshTokenApi) =>
  nextApi.post<RefreshTokenApiResponseApi>("refresh-token", form);

export const signinFormValidation = yup.object().shape({
  username: textValidation(3, 20),
  password: textValidation(6, 20),
});
