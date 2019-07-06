import {observable, action} from 'mobx'

class AccountStore {
    @observable token: string = ''; 

    @action
    setToken(token: string) {
        this.token = token;
    }

}

export default AccountStore;
