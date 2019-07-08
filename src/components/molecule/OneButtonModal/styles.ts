import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

// 흐려지는 배경
const modalBackground: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
}

// popUp 카드
const modalCard: ViewStyle = {
    backgroundColor: '#fff',
    width: '70%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center'
}

const modalText: TextStyle = {
    fontSize: 15
}

const modalButton: ViewStyle = {
    width: '30%',
    height: '25%',
    backgroundColor: '#00bc45',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
}

const modalButtonText: TextStyle = {
    color: '#dedede'
}

export default StyleSheet.create({
    modalBackground,
    modalCard,
    modalText,
    modalButton,
    modalButtonText
});
