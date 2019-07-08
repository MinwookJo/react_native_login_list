import Axios, { AxiosResponse } from "axios";
import { BASE_API_URL, ApiResponseType } from "../../utils/api";

// 즐겨찾기 code 타입
export enum VehicleFavoriteSuccessCode {
    OK = 'ok'
}

// 즐겨찾기 response
export type VehicleFavoriteResponse = VehicleFavoriteSuccessCode;

// 즐겨찾기 request
export type VehicleFavoriteRequest = {
    status: boolean
}

// vehicle type component, api response 모두 사용
export type VehicleType = {
    vehicleIdx: number,
    description: string,
    favorite: boolean,
    licenseNumber: string,
    capacity: number
}

// vehicle 초기화 상수 state 초기화 할 때 사용
export const initialVehicle: VehicleType = {
    vehicleIdx: -1,
    description: '',
    favorite: false,
    licenseNumber: '',
    capacity: 0
}

// list fetch api call axios
export const fetchVehicleList = async (token: string) => {
   return Axios.get(BASE_API_URL + 'mobile/v1/users/self/vehicles/', {headers: { 'authorization': `Bearer ${token}`}})
    .then(
        (result: AxiosResponse<ApiResponseType<VehicleType[]>>): VehicleType[] => {
            return result.data.data;
        }
    )
} 

// 즐겨찾기 api call axios
export const updateVehicleFavorite = async (vehicleIdx: number, request: VehicleFavoriteRequest, token: string) => {
    const url = `${BASE_API_URL}mobile/v1/users/self/vehicles/${vehicleIdx}/favorite`
    return Axios.put(url, request, {headers: { 'authorization': `Bearer ${token}`}})
    .then(
        (result:  AxiosResponse<ApiResponseType<VehicleFavoriteResponse>>): VehicleFavoriteResponse => {
            return result.data.data;
        }
    )
}
