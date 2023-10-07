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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../Profile screen/ProfileScreen';
import SearchScreen from '../Search screen/SearchScreen';
import ExploreScreen from '../Explore screen/ExploreScreen';
import HomeScreen from '../Home screen/HomeScreen';
import SessionScreen from '../Session screen/SessionScreen';
import FeatherIcons from 'react-native-vector-icons/FontAwesome6';

const BottomTab = createBottomTabNavigator();
const CombinedScreens = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveBackgroundColor: 'orange',
        tabBarInactiveBackgroundColor: 'grey',
      }}>
      <BottomTab.Screen
        name="Home screen"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <FeatherIcons name="house" color="black" size={25} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search screen"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <FeatherIcons name="magnifying-glass" color="black" size={25} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Explore screen"
        component={ExploreScreen}
        options={{
          tabBarIcon: () => (
            <FeatherIcons name="compass" color="black" size={25} solid />
          ),
        }}
      />
      <BottomTab.Screen
        name="Session screen"
        component={SessionScreen}
        options={{
          tabBarIcon: () => (
            <FeatherIcons name="book-open" color="black" size={25} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile screen"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <FeatherIcons name="user" color="black" size={25} solid />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default CombinedScreens;
