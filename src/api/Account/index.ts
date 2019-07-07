import { DEVICE_TYPE } from "../../utils/device";
import Axios, { AxiosResponse } from 'axios';
import { BASE_API_URL, ApiResponseType } from "../../utils/api";

export type SignInRequest = {
  userId: string,
  password: string,
  deviceType: DEVICE_TYPE
}

export type SignInApiType = {
  token: string
}

export const fetchSignIn = async (request: SignInRequest) => {
    return Axios.post(BASE_API_URL + 'mobile/v1/auth/', request)
    .then(
      (result: AxiosResponse<ApiResponseType<SignInApiType>>): SignInApiType => {
        return result.data.data;
      }
    )
  };
  