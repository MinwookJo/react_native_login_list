import {observable, action, computed} from 'mobx'

class SearchStore {
    @observable searchKeyWord: string = ''; 
    @observable vehicleList: [];
    
    @computed
    get searchedVehicleList(): [] {
        return this.vehicleList;
    }

    @action
    changeKeyWord() {
        this.searchKeyWord = this.searchKeyWord + '1';
    }

}

export default SearchStore;
