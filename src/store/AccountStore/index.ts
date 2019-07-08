import {observable, action, computed} from 'mobx'
import { SignInRequest, fetchSignIn, SignInApiType } from '../../api/Account';
import { saveUserId, savePassword } from '../../storage/AccountStorage';

class AccountStore {
    @observable token: string = ''; 

    @action.bound
    setToken(token: string) {
        this.token = token; 
    }

    @action.bound
    fetchTokenAndSigIn(request: SignInRequest, isSaveToken: boolean, onSeccess?: () => void, onFail?: () => void) {
        fetchSignIn(request)
        .then((result: SignInApiType) => {
            this.setToken(result.token);
            // signIn 성공 후 userInfo 저장
            isSaveToken ? this.saveUserInfo(request.userId, request.password) : null;
            !!onSeccess && onSeccess();
        })
        .catch((err) => {
            console.log(err);
            !!onFail && onFail();
        });
    }

    private saveUserInfo = (userId: string, pasword: string) => {
        saveUserId(userId);
        savePassword(pasword);
    }
}

export default AccountStore;
