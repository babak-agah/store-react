import { nextApi } from "@src/lib/axios";

export interface RefreshTokenApi {
  refreshToken: string;
}

export interface RefreshTokenApiResponseApi {}

export const refreshTokenApi = (form: RefreshTokenApi) =>
  nextApi.post<RefreshTokenApiResponseApi>("refresh-token", form);
