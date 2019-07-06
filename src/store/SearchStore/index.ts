import {observable, action, computed} from 'mobx'
import { VehicleType } from '../../api/Vehicle';

class SearchStore {
    @observable searchKeyWord: string = ''; 
    @observable vehicleList: VehicleType[] = [];
    
    @computed
    get searchedVehicleList(): VehicleType[] {
        return this.vehicleList;
    }

    @action
    changeKeyWord() {
        this.searchKeyWord = this.searchKeyWord + '1';
    }

    @action
    setVehicleList(list: VehicleType[]) {
        this.vehicleList = list;
    }

}

export default SearchStore;
