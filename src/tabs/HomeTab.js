import React from 'react';
import {StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import moment from 'moment';
import {useDarkMode} from 'react-native-dark-mode';
const HomeTab = ({navigation}) => {
  const isDarkMode = useDarkMode(); // true or false
  const goToSetting = () => navigation.navigate('Setting');
  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkBack]}>
      <Text style={isDarkMode && styles.darkText}>Home</Text>
      <Text style={isDarkMode && styles.darkText}>
        {moment().format('YYYY-MM-DD')}
      </Text>
      <TouchableOpacity
        style={[styles.button, styles.center]}
        onPress={goToSetting}>
        <Text>GO TO SETTING SCREEN</Text>
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
  darkBack: {
    backgroundColor: 'black',
  },
  darkText: {
    color: '#ffffff',
  },
  button: {
    height: hp('6%'),
    width: wp('60%'),
    backgroundColor: 'gray',
    borderRadius: hp('6%'),
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeTab;
