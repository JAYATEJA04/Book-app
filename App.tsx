import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import CombinedScreens from './source/screens/Combined screen/CombinedScreens';
import LoginScreen from './source/screens/Login Screen/LoginScreen';

const App = () => {
  return (
    <NavigationContainer>
      {/* <CombinedScreens /> */}
      <LoginScreen />
    </NavigationContainer>
  );
};

export default App;
