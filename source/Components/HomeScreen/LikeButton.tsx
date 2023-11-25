import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Extrapolate,
  interpolate,
} from 'react-native-reanimated';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const LikeButton = () => {
  const liked = useSharedValue(0);

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const fillinStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: liked.value}],
      opacity: liked.value,
    };
  });

  return (
    <Pressable onPress={() => (liked.value = withSpring(liked.value ? 0 : 1))}>
      <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
        <MaterialCommunityIcon
          name={'heart-outline'}
          size={30}
          color={'black'}
        />
      </Animated.View>
      <Animated.View style={fillinStyle}>
        <MaterialCommunityIcon name={'heart'} size={30} color={'red'} />
      </Animated.View>
    </Pressable>
  );
};

export default LikeButton;
