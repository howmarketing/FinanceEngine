import { AuthenticationService } from "../authentication/authentication.service";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const authenticationService = new AuthenticationService();
const axiosService = axios.create({
  baseURL: process?.env?.REACT_APP_AP || '::1:3000',
  url: '/',
  headers: {
    "Content-type": "application/json",
    "x-pob-application": "application",
    "x-pob-userid": "teste"
  }
});

axiosService.interceptors.request.use((request) => {
  const authentication = authenticationService.getAuthentication();
  if (authentication) {
    request.headers = {
      "Authorization": `bearer ${authentication.token}`
    };
  }
  return request;
});

export class GenericService {
  get<T = { [x: string]: any; data?: Record<string, any> }, R = AxiosResponse<T>, D = any>(path: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return axiosService.get<T, R, D>(path, config);
  }

  postToken<T = { [x: string]: any; data?: Record<string, any> }, R = AxiosResponse<T>, D = any>(path: string, body: D | any, config?: AxiosRequestConfig<D>): Promise<R> {
    return axiosService.post<T, R, D>(path, body, config);
  }

}