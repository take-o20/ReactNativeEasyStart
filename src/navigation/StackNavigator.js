import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import AsyncStorage from '@react-native-community/async-storage';
import SettingScreen from '../screens/SettingScreen';
import LoginScreen from '../screens/LoginScreen';
const Stack = createStackNavigator();
export const AuthContext = React.createContext();

const StackNavigator = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'LOG_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'LOG_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let auth_token;
      try {
        auth_token = await AsyncStorage.getItem('auth_token');
      } catch (e) {
        // Restoring token failed
      }
      dispatch({type: 'RESTORE_TOKEN', token: auth_token});
    };

    bootstrapAsync();
  }, []);
  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({type: 'LOG_IN', token: data});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('auth-token');
        } catch (e) {}
        dispatch({type: 'LOG_OUT'});
      },
    }),
    [],
  );

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator headerMode="none">
          {state.userToken == null && [
            <Stack.Screen name="Login" component={LoginScreen} />,
          ]}
          {state.userToken && [
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigation}
              options={{title: ''}}
            />,
            <Stack.Screen name="Setting" component={SettingScreen} />,
          ]}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};
export default StackNavigator;
