import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AuthContext} from '../navigation/StackNavigator';

const LoginScreen = (props) => {
  const {signIn} = React.useContext(AuthContext);
  const onLogin = () => {
    // server process
    let dummy_response = {ok: true};
    if (dummy_response.ok) {
      signIn('user_id');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: hp('5%')}}>This is{'\n'} Login Screen</Text>
      <TouchableOpacity
        style={[styles.center, styles.button]}
        onPress={onLogin}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: hp('10%'),
    width: wp('60%'),
    borderRadius: hp('5%'),
    borderColor: 'red',
    backgroundColor: 'lightblue',
  },
});

export default LoginScreen;
