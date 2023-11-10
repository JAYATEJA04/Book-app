import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import CircularButton from '../Home screen/CircularButton';
import SampleComponent from '../Home screen/SampleComponent';

const SessionScreen = () => {
  return (
    <View style={styles.container}>
      <CircularButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#F8F6F4',
  },
  Text: {
    fontFamily: 'Montserrat-Bold',
    color: 'black',
  },
  Box: {
    width: 100,
    height: 100,
    backgroundColor: 'violet',
    borderRadius: 10,
    marginVertical: 50,
  },
});

export default SessionScreen;
