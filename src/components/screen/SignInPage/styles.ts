import {StyleSheet, ImageStyle, ViewStyle, TextStyle} from 'react-native';

const loginInputField = {
    width: 296,
    height: 48,
    borderWidth: 1,
    borderColor: '#2e2e2e',
    borderRadius: 4
}

const loginInputFieldSubtitle: TextStyle = {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 14,
    color: '#999999',
    marginBottom: 6
}

const checkBox: ViewStyle = {
    width: 18,
    height: 18,
    backgroundColor: 'green'
}

const checkBoxSubtitle: TextStyle = {
    fontSize: 13.6,
    color: '#999999',
    letterSpacing: 1.25,
    lineHeight: 16
}

const siginInIcon: ImageStyle & ViewStyle = {
    width: 120,
    height: 120,
    backgroundColor: 'grey'
}

export default StyleSheet.create({
    loginInputField,
    loginInputFieldSubtitle,
    siginInIcon,
    checkBox,
    checkBoxSubtitle,
});