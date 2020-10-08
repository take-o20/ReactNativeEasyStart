import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
const rewardAmount = 1000;
const showCompMessage = () => {
  Alert.alert('GET 1000 COINS', 'You earned 1000 coins.', [
    {text: 'OK', onPress: () => true},
  ]);
};
const getRewardCoin = async () => {
  try {
    const value = await AsyncStorage.getItem('coins');
    if (value !== null) {
      let obj = JSON.parse(value);
      obj.amount += rewardAmount;
      await AsyncStorage.setItem('coins', JSON.stringify(obj));
      showCompMessage();
    } else {
      let coin = {amount: rewardAmount};
      await AsyncStorage.setItem('coins', JSON.stringify(coin));
      showCompMessage();
    }
  } catch (e) {
    let coin = {amount: rewardAmount};
    await AsyncStorage.setItem('coins', JSON.stringify(coin));
    showCompMessage();
  }
};

export default getRewardCoin;
