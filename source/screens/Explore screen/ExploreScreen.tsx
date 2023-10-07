import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Hi, this is where you explore</Text>
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

export default ExploreScreen;
