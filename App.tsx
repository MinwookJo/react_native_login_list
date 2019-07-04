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
        title: 'signIn',
        headerBackTitle: 'A much too long text for back button from B to A',
        headerTruncatedBackTitle: 'to Back'
      }),
    },
    List: {
      screen: ListPage,
      navigationOptions: () => ({
        title: 'list',
        headerBackTitle: 'A much too long text for back button from B to A',
        headerTruncatedBackTitle: 'to Back'
      }),
    },
  },
  {
    initialRouteName: APP_PATH.SIGNIN
  }
);

export default createAppContainer(App);
