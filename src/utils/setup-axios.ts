import {
  Axios,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

interface SetupAxiosProps {
  axiosInstance: Axios;
  baseUrl: string;
  token?: string;
  errorHandler: (error: AxiosError) => void;
}
export const setupAxios = ({
  axiosInstance,
  token,
  baseUrl,
  errorHandler,
}: SetupAxiosProps) => {
  axiosInstance.defaults.baseURL = baseUrl;
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  // const onRequest = (
  //   config: AxiosRequestConfig
  // ): Promise<AxiosRequestConfig> => {
  //   return Promise.resolve(config);
  // };

  const onRequest = (
    config: InternalAxiosRequestConfig<any>
  ): Promise<InternalAxiosRequestConfig> => {
    return Promise.resolve(config);
  };

  const onRequestError = (error: AxiosError) => {
    errorHandler(error);
  };

  const onResponse = (response: AxiosResponse): Promise<AxiosResponse> => {
    return Promise.resolve(response);
  };

  const onResponseError = async (error: AxiosError) => {
    errorHandler(error);
  };

  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
};
