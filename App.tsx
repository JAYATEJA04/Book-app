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
import UserRegistration from './source/screens/Login Screen/RegistrationScreen';
import {ReactNativeFirebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import {Provider} from 'react-redux';
import store from './source/screens/Session screen/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <CombinedScreens />
        {/* <LoginScreen /> */}
        {/* <UserRegistration /> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
