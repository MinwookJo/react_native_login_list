/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import SignInPage from './src/components/screen/SignInPage';
import ListPage from './src/components/screen/ListPage';
import { NavigationContainer, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';

export const APP_PATH = {
  SIGNIN: 'SignIn',
  LIST: 'List'
}

const App: NavigationContainer = createStackNavigator(
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
    initialRouteName: APP_PATH.SIGNIN
  }
);

export default createAppContainer(App);
