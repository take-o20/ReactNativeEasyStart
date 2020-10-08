import {
  RewardedAd,
  TestIds,
  RewardedAdEventType,
  AdEventType,
} from '@react-native-firebase/admob';
import {Platform} from 'react-native';
const interstitialId =
  Platform.OS === 'ios' ? 'your-admob-project/helloworld' : 'android';
const adUnitId = __DEV__ ? TestIds.REWARDED : interstitialId;

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['clothing', 'game'],
});

const rewardAd = ({onClose = () => {}}) => {
  rewarded.load();
  rewarded.onAdEvent((type, error, reward) => {
    if (type === RewardedAdEventType.LOADED) {
      rewarded.show();
    }
    if (type === RewardedAdEventType.EARNED_REWARD) {
    }
    if (type === AdEventType.CLOSED) {
      onClose();
    }
  });
};
export default rewardAd;
