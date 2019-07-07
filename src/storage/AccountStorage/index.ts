import {AsyncStorage} from 'react-native';

export const saveUserId = (userId: string) => {
    const data = JSON.stringify(userId);
    AsyncStorage.setItem('userId', data);
}

export const getUserId = () => {
    return AsyncStorage.getItem('userId', (err, result): string => {
        let userId: string = '';
        if(!!err) {
        } else {
            userId = JSON.parse(result);
        }
        return userId;
    });
}

export const savePassword = (password: string) => {
    const data = JSON.stringify(password);
    AsyncStorage.setItem('password', data);
}

export const getPassword = () => {
    return AsyncStorage.getItem('password', (err, result): string => {
        let password: string = '';
        if(!!err) {
        } else {
            password = JSON.parse(result);
        }
        return password;
    });
}