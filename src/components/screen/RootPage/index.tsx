import React from 'react';
import SignInPage from '../SignInPage';
import ListPage from '../ListPage';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';

// app path 정의
export const APP_PATH = {
  SIGNIN: 'SignIn',
  LIST: 'List'
}

// 루트 네비게이션 페이지 react-navigation 사용
const RootPage = createStackNavigator(
  {
    SignIn: {
      screen: SignInPage,
      navigationOptions: () => ({
        header: null
      }),
    },
    List: {
      screen: ListPage,
      navigationOptions: () => ({
        header: null
      }),
    },
  },
  {
    initialRouteName: APP_PATH.SIGNIN,
  }
);

export default createAppContainer(RootPage);
