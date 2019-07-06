import {StyleSheet, ImageStyle, ViewStyle, TextStyle} from 'react-native';

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
    backgroundColor: 'grey',
    marginTop: 100
}

export default StyleSheet.create({
    siginInIcon,
    checkBox,
    checkBoxSubtitle,
});