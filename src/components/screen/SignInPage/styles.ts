import {StyleSheet, ImageStyle, ViewStyle, TextStyle} from 'react-native';

// 중간에 큰 아이콘
const siginInIcon: ImageStyle = {
    width: 120,
    height: 120,
    marginTop: 100
}

// 로그인 버튼
const signInButton: ViewStyle = {
    backgroundColor: '#00bc45',
    width: 296,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 60
}

// 로그인 버튼 텍스트
const signInButtonText: TextStyle = {
    color: '#dedede',
}

// 비밀번호 찾기 버튼
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

// 비밀번호 찾기 텍스트
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