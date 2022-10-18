import { AuthenticationService } from "../authentication/authentication.service";
import axios from "axios";
const authenticationService = new AuthenticationService();
const axiosService = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-type": "application/json",
    "x-pob-application": "eapplication",
    "x-pob-userid": "mom001"
  }
});

axiosService.interceptors.request.use((request) => {
  // const authentication = authenticationService.getAuthentication();
  // if (authentication) {
  //   request.headers = {
  //     "Authorization": `bearer ${authentication.token}`
  //   };
  // }
  return request;
});

export class GenericService {

  get(path: string): any {
    return axiosService.get(path);
  }

  postToken(path: string, body: any): any {
    return axiosService.post(path, body);
  }

}