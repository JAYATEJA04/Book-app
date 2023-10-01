import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const SessionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>hi, this where your session happens</Text>
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
});

export default SessionScreen;
