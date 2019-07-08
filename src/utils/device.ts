import { Platform } from "react-native";

export enum DEVICE_TYPE {
    Ios = 'ios',
    Android = 'android',
    Undefine = 'undefine'
}

// 디바이스 타입 가져오는 함수
export const getOS = (): DEVICE_TYPE => {
    if(Platform.OS === 'ios') {
        return DEVICE_TYPE.Ios
    } else if (Platform.OS === 'android') {
        return DEVICE_TYPE.Android
    } else {
        return DEVICE_TYPE.Undefine
    }
}