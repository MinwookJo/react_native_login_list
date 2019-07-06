import { DEVICE_TYPE } from "../../utils/device";
import Axios, { AxiosResponse } from 'axios';
import { BASE_API_URL, ApiResponseType } from "../../utils/api";
import SignInForm from "../../components/screen/SignInPage/components/SignInForm";
import { saveToken } from "../../storage/TokenStorage";

export type SignInApiType = {
  token: string
}

export const fetchSignIn = async (request: {
    userId: string,
    password: string,
    deviceType: DEVICE_TYPE
}) => {
    return Axios.post(BASE_API_URL + 'mobile/v1/auth/', request)
    .then(
      (result: AxiosResponse<ApiResponseType<SignInApiType>>): SignInApiType => {
        return result.data.data;
      }
    )
  };
  