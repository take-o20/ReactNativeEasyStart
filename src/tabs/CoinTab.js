import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {useFocusEffect} from '@react-navigation/native';
import AnimatedNumber from 'react-native-animated-number';
import rewardAd from '../components/Admob/RewardAd';
import getRewardCoin from '../components/Coins/getRewardCoin';
import {useDarkMode} from 'react-native-dark-mode';

const CoinTab = () => {
  const isDarkMode = useDarkMode(); // true or false
  const [coinAmount, setCoinAmount] = useState({amount: 0});
  useFocusEffect(
    React.useCallback(() => {
      setCoinAmount({amount: 10000});
    }, []),
  );

  const onCloseReward = () => {
    getRewardCoin();
    let obj = {amount: coinAmount.amount + 1000};
    setCoinAmount(obj);
  };
  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkBack]}>
      <View style={[styles.header, isDarkMode && styles.darkBorder]}>
        <Text style={isDarkMode && styles.darkText}>Your Coin</Text>
      </View>
      <View style={styles.mainWrapper}>
        <FontAwesome5Icon name="coins" size={hp('15%')} color="yellow" />
        <AnimatedNumber
          style={[styles.coinText, isDarkMode && styles.darkText]}
          value={coinAmount.amount}
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          onPress={() => rewardAd({onClose: onCloseReward})}
          style={[styles.button, styles.marginVertical, styles.color1]}>
          <Text style={[styles.buttonText, styles.whiteText]}>
            GET 1000 COIN{'\n'}BY WATCHING REWARDED AD{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkBack: {
    backgroundColor: 'black',
  },
  darkText: {
    color: '#fff',
  },
  darkBorder: {
    borderBottomColor: '#fff',
    borderBottomWidth: 0.5,
  },
  header: {
    height: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
  },
  mainWrapper: {
    marginVertical: hp('5%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  coinText: {
    fontSize: hp('5%'),
    maxWidth: wp('50%'),
  },
  buttonsWrapper: {
    width: wp('100%'),
    alignItems: 'center',
  },
  button: {
    width: wp('70%'),
    flexDirection: 'row',
    borderRadius: hp('4%'),
    height: hp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#44D492',
  },
  buttonText: {textAlign: 'center'},
  whiteText: {fontWeight: '700', color: '#fff'},
  color1: {
    backgroundColor: 'blue',
  },
});

export default CoinTab;
