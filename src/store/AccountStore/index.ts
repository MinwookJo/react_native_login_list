import {observable, action} from 'mobx'

class AccountStore {
    @observable userId: string = '';
    @observable password: string = ''; 
    @observable deviceToken: string = ''; 
}

export default AccountStore;
