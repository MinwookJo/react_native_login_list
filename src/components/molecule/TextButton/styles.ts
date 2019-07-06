import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

const textButton: ViewStyle = {
    backgroundColor: '#00bc45',
    width: 296,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
}

const textButtonText: TextStyle = {
    color: '#dedede',    
}

export default StyleSheet.create({
    textButton,
    textButtonText
});