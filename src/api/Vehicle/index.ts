import Axios, { AxiosResponse } from "axios";
import { BASE_API_URL, ApiResponseType } from "../../utils/api";

export type VehicleType = {
    vehicleIdx: number,
    description: string,
    favorite: boolean,
    licenseNumber: string,
    capacity: number
}

export type UpdateVehicleFavoriteApiType = string;

export const fetchVehicleList = async (token: string) => {
    return Axios.get(BASE_API_URL + 'mobile/v1/users/self/vehicles/', {headers: { 'authorization': `Bearer ${token}`}})
    .then(
        (result: AxiosResponse<ApiResponseType<VehicleType[]>>): VehicleType[] => {
            return result.data.data;
        }
    )
} 

export const updateVehicleFavorite = async(vehicleIdx: number, favorite: boolean) => {
    return Axios.put(BASE_API_URL + 'mobile/v1/users/self/vehicles/'+ vehicleIdx +'/favorite', favorite)
    .then(
        (result:  AxiosResponse<ApiResponseType<UpdateVehicleFavoriteApiType>>): UpdateVehicleFavoriteApiType => {
            return result.data.data;
        }
    )
}