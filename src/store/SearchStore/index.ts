import {observable, action} from 'mobx'

class SearchStore {
    @observable searchKeyWord: string = ''; 

    @action
    changeKeyWord() {
        this.searchKeyWord = this.searchKeyWord + '1';
    }

}

export default SearchStore;
