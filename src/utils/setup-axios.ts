import { Axios } from "axios";

interface SetupAxiosProps {
  axiosInstance: Axios;
  baseUrl: string;
  token?: string;
}
export const setupAxios = ({
  axiosInstance,
  token,
  baseUrl,
}: SetupAxiosProps) => {
  axiosInstance.defaults.baseURL = baseUrl;
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};
