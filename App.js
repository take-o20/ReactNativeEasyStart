/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import Tabnavigator from './src/navigation/TabNavigation';
import StackNavigator from './src/navigation/StackNavigator';
const App: () => React$Node = () => {
  return <StackNavigator />;
};

export default App;
