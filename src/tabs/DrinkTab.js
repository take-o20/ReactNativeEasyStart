import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import {useFocusEffect} from '@react-navigation/native';
import {useDarkMode} from 'react-native-dark-mode';

const DrinkTab = (props) => {
  const isDarkMode = useDarkMode(); // true or false
  const [isModalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  useFocusEffect(
    React.useCallback(() => {
      setText('hello');
    }, []),
  );
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkBack]}>
      <View style={styles.header}>
        <Text style={isDarkMode && styles.darkText}>{text}</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
        <Text>PUSH ME</Text>
        <Icon name="add-circle-outline" size={hp('3%')} />
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={[styles.darkText, {marginBottom: hp('5%')}]}>
            This is Modal
          </Text>
          <Button title="CLOSE" onPress={toggleModal} color="#BF2669" />
        </View>
      </Modal>
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
  },
  header: {
    height: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    width: wp('100%'),
    flexDirection: 'row',
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: hp('10%'),
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'gray',
  },
  modalContainer: {
    alignItems: 'center',
  },
});
export default DrinkTab;
