import axios, { AxiosRequestConfig } from "axios";
import { AuthenticationService } from "./src/utils/services/authentication/authentication.service";
const authentication = new AuthenticationService();
export const todoBase = {
    authentication,
    get config() {
        return {
            baseURL: (typeof process !== 'undefined') ? (process?.env?.REACT_APP_AP || '::1:3000') : 'http://localhost:3000',
            url: '/',
            headers: {
                "Authorization": `bearer ${this.authentication['token'] || ''}`,
                "Content-type": "application/json",
                "x-pob-application": "application",
                "x-pob-userid": "teste"
            }
        }
    },
    get: (path: string, config?: AxiosRequestConfig) => {
        return axios.get(path, config);
    }
}
