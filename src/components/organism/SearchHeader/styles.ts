import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';

const searchHeaderWrapper: ViewStyle = {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#1E1E1E',
    elevation: 2,
    marginBottom: 16
}

const SearchIcon: ImageStyle = {
    width: 17,
    height: 17,
    marginLeft: 15
}

const SearchInputField: ViewStyle & TextStyle = {
    borderWidth: 0,
    color: '#616161',
    marginLeft: 16
}

export default StyleSheet.create({
    searchHeaderWrapper,
    SearchIcon,
    SearchInputField
});
