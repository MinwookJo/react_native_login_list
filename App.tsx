/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'mobx-react';
import SearchStore from './src/store/SearchStore';
import RootPage from './src/components/screen/RootPage';

// App 전체 Store들, NavigationRoot 포함
class App extends React.Component {
  render() {
    const searchStore = new SearchStore();
    return(
      <Provider searchStore={searchStore}>
        <RootPage/>
      </Provider>
    );
  }
}

export default App;
