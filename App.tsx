/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'mobx-react';
import RootStore from './src/store/RootStore';
import RootPage from './src/components/screen/RootPage';

// App 전체 Store들, NavigationRoot 포함
class App extends React.Component {
  render() {
    const rootStore = new RootStore();
    return(
      <Provider rootStore={rootStore}>
        <RootPage/>
      </Provider>
    );
  }
}

export default App;
