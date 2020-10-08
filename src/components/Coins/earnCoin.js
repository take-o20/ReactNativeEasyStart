import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import RewardAd from '../Admob/RewardAd';
const earnAmount = 100;
const showFiveTimeCompMessage = () => {
  Alert.alert('GET 500 COINS', 'You earned 500 coins', [
    {text: 'OK', onPress: () => true},
  ]);
};
const fiveTimesCoin = async () => {
  try {
    const value = await AsyncStorage.getItem('coins');
    if (value !== null) {
      let obj = JSON.parse(value);
      obj.amount += earnAmount * 4;
      await AsyncStorage.setItem('coins', JSON.stringify(obj));
      showFiveTimeCompMessage();
    } else {
      let coin = {amount: earnAmount * 5};
      await AsyncStorage.setItem('coins', JSON.stringify(coin));
      showFiveTimeCompMessage();
    }
  } catch (e) {
    console.log(e);
  }
};
const showCompMessage = () => {
  Alert.alert(
    'GET 100 COINS',
    'You earned 100 coins.\n5 times its amount by watching rewarded ad?',
    [
      {text: 'NO', onPress: () => true},
      {
        text: 'YES',
        onPress: () => RewardAd({onClose: fiveTimesCoin}),
      },
    ],
  );
};
const earnCoin = async () => {
  try {
    const value = await AsyncStorage.getItem('coins');
    if (value !== null) {
      let obj = JSON.parse(value);
      obj.amount += earnAmount;
      await AsyncStorage.setItem('coins', JSON.stringify(obj));
      showCompMessage();
    } else {
      let coin = {amount: earnAmount};
      await AsyncStorage.setItem('coins', JSON.stringify(coin));
      showCompMessage();
    }
  } catch (e) {
    let coin = {amount: earnAmount};
    await AsyncStorage.setItem('coins', JSON.stringify(coin));
    showCompMessage();
  }
};

export default earnCoin;
