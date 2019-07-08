import Axios, { AxiosResponse } from "axios";
import { BASE_API_URL, ApiResponseType } from "../../utils/api";

export enum VehicleFavorite {
    OK = 'ok'
}

export type UpdateVehicleFavoriteRequest = {
    status: boolean
}

export type VehicleType = {
    vehicleIdx: number,
    description: string,
    favorite: boolean,
    licenseNumber: string,
    capacity: number
}

export const initialVehicle: VehicleType = {
    vehicleIdx: -1,
    description: '',
    favorite: false,
    licenseNumber: '',
    capacity: 0
}

export type UpdateVehicleFavoriteApiType = VehicleFavorite;

export const fetchVehicleList = async (token: string) => {
   return Axios.get(BASE_API_URL + 'mobile/v1/users/self/vehicles/', {headers: { 'authorization': `Bearer ${token}`}})
    .then(
        (result: AxiosResponse<ApiResponseType<VehicleType[]>>): VehicleType[] => {
            return result.data.data;
        }
    )
} 

export const updateVehicleFavorite = async (vehicleIdx: number, request: UpdateVehicleFavoriteRequest, token: string) => {
    const url = `${BASE_API_URL}mobile/v1/users/self/vehicles/${vehicleIdx}/favorite`
    return Axios.put(url, request, {headers: { 'authorization': `Bearer ${token}`}})
    .then(
        (result:  AxiosResponse<ApiResponseType<UpdateVehicleFavoriteApiType>>): UpdateVehicleFavoriteApiType => {
            return result.data.data;
        }
    )
}
