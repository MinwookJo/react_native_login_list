import {observable, action, computed} from 'mobx'
import { VehicleType, fetchVehicleList, updateVehicleFavorite, VehicleFavoriteRequest, VehicleFavoriteResponse, VehicleFavoriteSuccessCode } from '../../api/Vehicle';

class SearchStore {
    @observable searchKeyWord: string = ''; 
    @observable vehicleList: VehicleType[] = [];
    
    getVehicleListItemAt = (vehicleIdx: number): VehicleType => {
        const primaryItems = this.vehicleList.filter(
            (element: VehicleType) => {
                if(element.vehicleIdx === vehicleIdx) {
                    return element;
                }
            }
        );
        return primaryItems[0];
    }

    @computed
    get searchedVehicleList(): VehicleType[] {
        // 검색 결과가 속한 배열만 반환
        let filterList: VehicleType[] = this.vehicleList.filter(
            (element: VehicleType) => {
                if(element.description.includes(this.searchKeyWord)) {
                    return element;
                } else if(element.licenseNumber.includes(this.searchKeyWord)) {
                    return element;
                } else if(element.capacity.toString().includes(this.searchKeyWord)) {
                    return element;
                }
            }
        )
        return filterList;
    }

    @action.bound
    changeKeyWord(vaule: string) {
        this.searchKeyWord = vaule;
    }

    @action.bound
    setVehicleList(list: VehicleType[]) {
        this.vehicleList = list;
    }

    @action.bound
    changeFavoriteVehicleListAt(vehicleIdx: number, vaule: boolean) {
        const changedList: VehicleType[] = this.vehicleList.filter(
            (element: VehicleType) => {
                if(element.vehicleIdx === vehicleIdx) {
                    element.favorite = vaule;
                    return element;
                } else {
                    return element;
                }
            }
        );

        this.vehicleList = changedList;
    }

    @action.bound
    fetchVehicleListData = (token: string, onScuess?: () => void, onFail?: () => void) => {
        fetchVehicleList(token).then(
            (result: VehicleType[]) => {
                const starList: VehicleType[] = [];
                const unStarList: VehicleType[] = [];

                // star와 unstar로 분류해서 star 뒤에 unstar를 붙힘
                result.forEach(
                    (vaule: VehicleType) => {
                        if(vaule.favorite) {
                            starList.push(vaule);
                        } else {
                            unStarList.push(vaule);
                        }
                    }
                );
                result = starList.concat(unStarList);

                this.setVehicleList(result);
                !!onScuess && onScuess();
            }
        ).catch(
            (err) => {
                console.log(err);
                !!onFail && onFail();
            }
        )
    }

    @action.bound
    updateVehicleSFavorite(vehicleIdx: number, request: VehicleFavoriteRequest, token, onScuess?: () => void, onFail?: () => void) {
        updateVehicleFavorite(vehicleIdx, request, token)
        .then((result: VehicleFavoriteResponse) => {
            if(result === VehicleFavoriteSuccessCode.OK) {
                this.changeFavoriteVehicleListAt(vehicleIdx, request.status);
            } else {
                throw new Error('Change Favorite Fail');
            }
            !!onScuess && onScuess();
        }).catch(
            (err) => {
                console.log(err);
                !!onFail && onFail();
            }
        )
    }

}

export default SearchStore;
