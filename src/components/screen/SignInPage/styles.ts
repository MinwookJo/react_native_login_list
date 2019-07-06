import {StyleSheet, ImageStyle, ViewStyle, TextStyle} from 'react-native';
const siginInIcon: ImageStyle = {
    width: 120,
    height: 120,
    marginTop: 100
}

const signInButton: ViewStyle = {
    backgroundColor: '#00bc45',
    width: 296,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 60
}

const signInButtonText: TextStyle = {
    color: '#dedede',
}

const forgotPasswordButton: ViewStyle = {
    backgroundColor: '#fff',
    width: 296,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2e2e2e',
    marginTop: 8
}

const forgotPasswordButtonText: TextStyle = {
    color: '#00bc45',
}

export default StyleSheet.create({
    siginInIcon,
    signInButton,
    signInButtonText,
    forgotPasswordButton,
    forgotPasswordButtonText
});