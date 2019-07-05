import {StyleSheet, ImageStyle, ViewStyle, TextStyle} from 'react-native';

const titleInputField = {
    width: 296,
    height: 48,
    borderWidth: 1,
    borderColor: '#2e2e2e',
    borderRadius: 4
}

const titleInputFieldSubtitle: TextStyle = {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 14,
    color: '#999999',
    marginBottom: 6
}

export default StyleSheet.create({
    titleInputField,
    titleInputFieldSubtitle,
});