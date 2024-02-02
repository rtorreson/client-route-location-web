/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  Method,
  AxiosResponse,
  RawAxiosRequestHeaders,
  ResponseType,
  AxiosHeaders,
} from 'axios';
import { toast } from 'react-toastify';

interface BackendResponse {
  code: string;
  message: string;
}

export class HttpClient {
  private axiosClient: AxiosInstance;

  constructor({
    baseURL,
    headers,
  }: {
    baseURL: string;
    headers?: RawAxiosRequestHeaders;
  }) {
    this.axiosClient = axios.create({
      baseURL,
      timeout: 1000000,
      headers,
    });

    this.setupInterceptors(3);
  }

  private setupInterceptors(retries: number): void {
    this.axiosClient.interceptors.request.use(
      (config: AxiosRequestConfig): any => {
        if (config.headers !== undefined) {
          return config;
        }
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    this.axiosClient.interceptors.response.use(
      (response) => {
        return response;
      },
      (error: AxiosError) => {
        if (
          error.code === AxiosError.ECONNABORTED &&
          (error.config!.retries ?? 0) < retries
        ) {
          error.config!.retries = (error.config!.retries ?? 0) + 1;
          return this.axiosClient.request(error.config!);
        } else {
          const responseData = error.response?.data as BackendResponse;
          toast.error(responseData.message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
        return Promise.reject(error);
      }
    );
  }

  public async request<T = any, D = any>({
    method,
    url,
    data,
    responseType,
    headers,
  }: {
    method: Method;
    url: string;
    data?: D;
    responseType?: ResponseType;
    headers?: RawAxiosRequestHeaders;
  }): Promise<AxiosResponse<T>> {
    return await this.axiosClient.request({
      url,
      method,
      data,
      responseType,
      headers,
    });
  }
}
