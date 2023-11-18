import React, {useEffect, useRef} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Animated,
  Text,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import {Ionicons} from 'react-native-vector-icons';
import SampleComponent from '../screens/Home screen/SampleComponent';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

const CircularButton = () => {
  const Navigation = useNavigation();
  const onButtonPress = () => {
    Alert.alert('Button is pressed, hurray!');
  };

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderWidth: 1,
        elevation: 4,
      }}>
      <ScrollView>
        {/* <Text style={{color: 'black', textAlign: 'center', padding: 20}}>Hi</Text> */}
      </ScrollView>
      <TouchableOpacity
        onPress={() => Navigation.navigate('Create')}
        style={{
          position: 'absolute',
          width: 60,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          right: 30,
          bottom: 50,
          elevation: 4,
        }}>
        <View
          style={{
            backgroundColor: 'blue',
            borderRadius: 50,
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <Text style={{color: 'white', fontSize: 20}}>+</Text> */}
          <Icon name="pen-nib" size={30} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CircularButton;
