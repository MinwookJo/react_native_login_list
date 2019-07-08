import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

// 차량정보 하나에 카드
const vehicleCard: ViewStyle = {
    height: 112,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 2,
    backgroundColor: '#FFF',
    borderColor: '#FAFAFA',
    borderWidth: 1,

    shadowColor: '#1E1E1E',
    elevation: 2
}

// 콘텐츠를 감싸는 패딩
const vehicleContent: ViewStyle = {
    marginLeft: 16,
    marginRight: 16
}

const descriptionText: TextStyle = {
    color: '#999',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '300'
}

const licenseNumberText: TextStyle = {
    color: '#333',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '400'
}

const capacityText: TextStyle = {
    color: '#999',
    fontSize: 14,
    lineHeight: 18,
}

export default StyleSheet.create({
    vehicleCard,
    vehicleContent,
    descriptionText,
    licenseNumberText,
    capacityText
});