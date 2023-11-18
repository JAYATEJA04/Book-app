import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const oneFourthWindowHeight = windowHeight / 4;
const effectiveWidth = windowWidth - 2 * 20;

const CreateTale = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        {/* post button view */}
        <View style={styles.postButtonView}>
          <TouchableOpacity style={styles.postButton}>
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
        {/* create post layout */}
        <View style={styles.createLayout}>
          <Image
            source={require('../../assets/Photos/me.jpg')}
            style={{height: 50, width: 50, borderRadius: 50}}
          />
          <View style={styles.textLayout}>
            <TextInput
              style={styles.textStyle} // Set the text color to green
              placeholder="Enter text"
              placeholderTextColor={'black'}
            />
          </View>
        </View>
        {/* border buttom */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.borderBottom} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container2: {
    padding: 10,
    // borderWidth: 1,
  },
  createLayout: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    // borderWidth: 1,
    height: oneFourthWindowHeight,
  },
  textLayout: {
    paddingHorizontal: 10,
  },
  textStyle: {
    fontSize: 18,
    color: 'black',
    flexWrap: 'wrap',
  },
  borderBottom: {
    height: 1,
    width: '90%',
    opacity: 0.1,
    backgroundColor: 'black',
  },
  postButtonView: {
    justifyContent: 'center',
    height: oneFourthWindowHeight / 5,
    alignItems: 'flex-end',
  },
  postButton: {
    borderRadius: 30,
    backgroundColor: '#39A7FF',
    justifyContent: 'center',
    alignItems: 'center',
    height: oneFourthWindowHeight / 5,
    width: 70,
  },
  postButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default CreateTale;
