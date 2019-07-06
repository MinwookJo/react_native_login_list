import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

const checkBoxWrapper: ViewStyle = {
    width: 21,
    height: 21,
    borderColor: '#00bc45',
    borderWidth: 1
}

const checkBoxImage: ImageStyle = {
    width: 18,
    height: 18
}

const checkBoxTitle: TextStyle = {
    fontSize: 13.6,
    color: '#999999',
    letterSpacing: 1.25,
    lineHeight: 16,
    marginLeft: 11
}

export default StyleSheet.create({
    checkBoxImage,
    checkBoxWrapper,
    checkBoxTitle
});