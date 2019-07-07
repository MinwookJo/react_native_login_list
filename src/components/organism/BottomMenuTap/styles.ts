import {StyleSheet, ViewStyle, ImageStyle} from 'react-native';

const bottomMenuWrapper: ViewStyle = {
    width: '100%',
    height: 56,
    backgroundColor: '#00bc45',
    flexDirection: 'row',
    alignItems: 'center'
}

const bottomMenuButton: ViewStyle = {
    width: 56,
    height: 56,
    backgroundColor: '#00bc45',
    justifyContent: 'center',
    alignItems: 'center'
}

const bottomMenuIcon: ImageStyle = {
    width: 24,
    height: 24
}

export default StyleSheet.create({
    bottomMenuWrapper,
    bottomMenuButton,
    bottomMenuIcon
});
