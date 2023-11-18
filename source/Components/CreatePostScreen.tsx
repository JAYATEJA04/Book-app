import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const oneFourthWindowHeight = windowHeight / 4;
const effectiveWidth = windowWidth - 2 * 20;

const CreateTale = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.createLayout}>
          <Image
            source={require('../../assets/Photos/me.jpg')}
            style={{height: 50, width: 50, borderRadius: 50}}
          />
          <View style={styles.textLayout}>
            <TextInput placeholder="What's your tale?" />
          </View>
        </View>
      </View>
      <View style={styles.borderBottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  createLayout: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    height: oneFourthWindowHeight,
  },
  textLayout: {
    paddingHorizontal: 10,
  },
  borderBottom: {
    height: 1,
    width: '80%',
    backgroundColor: 'black',
  },
});
export default CreateTale;
