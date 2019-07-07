import {observable, action, computed} from 'mobx'
import { VehicleType, fetchVehicleList } from '../../api/Vehicle';

class SearchStore {
    @observable searchKeyWord: string = ''; 
    @observable vehicleList: VehicleType[] = [];
    
    @computed
    get searchedVehicleList(): VehicleType[] {
        return this.vehicleList;
    }

    @action.bound
    changeKeyWord() {
        this.searchKeyWord = this.searchKeyWord + '1';
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
