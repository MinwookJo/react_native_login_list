import {observable, action, computed} from 'mobx'
import { VehicleType, fetchVehicleList } from '../../api/Vehicle';

class SearchStore {
    @observable searchKeyWord: string = ''; 
    @observable vehicleList: VehicleType[] = [];
    
    @computed
    get searchedVehicleList(): VehicleType[] {
        const filterList = this.vehicleList.filter(
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
    fetchVehicleListData = (token: string, onScuess: () => void, onFail: () => void) => {
        fetchVehicleList(token).then(
            (result: VehicleType[]) => {
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

}

export default SearchStore;
