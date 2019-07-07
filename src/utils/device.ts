import { Platform } from "react-native";

export enum DEVICE_TYPE {
    Ios = 'ios',
    Android = 'android',
    Undefine = 'undefine'
}

export const getOS = (): DEVICE_TYPE => {
    if(Platform.OS === 'ios') {
        return DEVICE_TYPE.Ios
    } else if (Platform.OS === 'android') {
        return DEVICE_TYPE.Android
    } else {
        return DEVICE_TYPE.Undefine
    }
}