import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../tabs/HomeTab';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import DrinkTab from '../tabs/DrinkTab';
import CoinTab from '../tabs/CoinTab';
import AnalysisTab from '../tabs/AnalysisTab';
import {useDarkMode} from 'react-native-dark-mode';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const isDarkMode = useDarkMode(); // true or false
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <FontAwesomeIcon name="home" size={size} color={color} />;
          }
          if (route.name === 'Drink') {
            return <FontAwesomeIcon name="glass" size={size} color={color} />;
          }
          if (route.name === 'Coin') {
            return <FontAwesome5Icon name="coins" size={size} color={color} />;
          }
          if (route.name === 'Analysis') {
            return (
              <FontAwesomeIcon name="line-chart" size={size} color={color} />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'lightgray',
        safeAreaInset: {bottom: 'never'},
        style: {backgroundColor: isDarkMode ? 'black' : 'white'},
      }}>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Drink" component={DrinkTab} />
      <Tab.Screen name="Coin" component={CoinTab} />
      <Tab.Screen name="Analysis" component={AnalysisTab} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
