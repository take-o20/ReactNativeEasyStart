import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {useDarkMode} from 'react-native-dark-mode';

const AnalysisTab = () => {
  const isDarkMode = useDarkMode(); // true or false
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const onChangeTab = (i) => {
    setLoading(true);
    const func = () => {
      setLoading(false);
      setPage(i);
    };
    setTimeout(func, 1000);
  };
  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkBack]}>
      <View style={[styles.header, isDarkMode && styles.darkBorder]}>
        <Text style={[styles.headerText, isDarkMode && styles.darkText]}>
          Your Analysis
        </Text>
      </View>
      <ScrollableTabView
        tabBarInactiveTextColor={isDarkMode && '#FFF'}
        tabBarActiveTextColor="orange"
        tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
        initialPage={0}
        onChangeTab={(e) => onChangeTab(e.i)}>
        <View tabLabel="Daily" style={styles.wapper}>
          <Text style={[isDarkMode && styles.darkText, {fontSize: hp('20%')}]}>
            {page}
          </Text>
        </View>
        <View tabLabel="Weekly" style={styles.wapper}>
          <Text style={[isDarkMode && styles.darkText, {fontSize: hp('20%')}]}>
            {page}
          </Text>
        </View>
        <View tabLabel="Monthly" style={styles.wapper}>
          <Text style={[isDarkMode && styles.darkText, {fontSize: hp('20%')}]}>
            {page}
          </Text>
        </View>
      </ScrollableTabView>
      {loading && (
        <ActivityIndicator
          style={styles.indicator}
          size="large"
          color="yellow"
        />
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
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
  indicator: {
    position: 'absolute',
    top: hp('50%'),
    left: wp('47%'),
  },
  tabBarUnderlineStyle: {
    backgroundColor: 'orange',
  },
  wapper: {
    height: hp('60%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnalysisTab;
