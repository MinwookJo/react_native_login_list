import {AsyncStorage} from 'react-native';

export const saveToken = (token: string) => {
    const data = JSON.stringify(token);
    AsyncStorage.setItem('Token', data);
}

export const getToken = () => {
    return AsyncStorage.getItem('Token', (err, result): string => {
        let token: string = '';
        if(!!err) {
        } else {
            token = JSON.parse(result);
        }
        return token;
    });
}