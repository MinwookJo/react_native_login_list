import { DEVICE_TYPE } from "../../utils/device";
import Axios, { AxiosResponse } from 'axios';
import { BASE_API_URL, ApiResponseType } from "../../utils/api";

// 로그인 request
export type SignInRequest = {
  userId: string,
  password: string,
  deviceType: DEVICE_TYPE
}

// 로그인 response
export type SignInResponse = {
  token: string
}

export const fetchSignIn = async (request: SignInRequest) => {
    return Axios.post(BASE_API_URL+'mobile/v1/auth', request)
    .then(
      (result: AxiosResponse<ApiResponseType<SignInResponse>>): SignInResponse => {
        return result.data.data;
      }
    )
  };
  