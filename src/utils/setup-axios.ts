import { Axios } from "axios";

export const setupAxios = ({
  axiosInstance,
  token,
}: {
  axiosInstance: Axios;
  token?: string;
}) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = "";
  }
};
