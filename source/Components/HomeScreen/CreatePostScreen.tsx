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

const CreateTale = ({route}) => {
  const [textPost, setTextPost] = useState<string>('');
  const isButtonDisabled = textPost.length === 0;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        {/* post button view */}
        <View style={styles.postButtonView}>
          <TouchableOpacity
            style={
              isButtonDisabled
                ? styles.postButtonDisabled
                : styles.postButtonEnabled
            }
            disabled={isButtonDisabled}
            onPress={() =>
              navigation.navigate({
                name: 'Home',
                params: {post: textPost},
                mere: true,
              })
            }>
            <Text
              style={
                isButtonDisabled
                  ? styles.postButtonTextDisabled
                  : styles.postButtonTextEnabled
              }>
              Post
            </Text>
          </TouchableOpacity>
        </View>
        {/* create post layout */}
        <View style={styles.createLayout}>
          <View style={styles.imageView}>
            <Image
              source={require('../../../assets/Photos/me.jpg')}
              style={{height: 50, width: 50, borderRadius: 50}}
            />
          </View>
          <View style={styles.textLayout}>
            <TextInput
              style={styles.taleText}
              placeholder={"What's your tale?"}
              multiline
              value={textPost}
              onChangeText={txt => setTextPost(txt)}
              placeholderTextColor={'grey'}
            />
          </View>
        </View>
        {/* border buttom */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  container2: {
    flex: 1,
    // borderWidth: 1,
  },
  createLayout: {
    flexDirection: 'row',
    // borderWidth: 1,
  },
  imageView: {
    // padding: 1,
    // borderWidth: 1,
  },
  textLayout: {
    flex: 1,
    left: 10,
    // borderWidth: 1,
  },
  taleText: {
    // flexWrap: 'wrap',
    color: 'black',
    fontSize: 18,
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
  postButtonDisabled: {
    borderRadius: 30,
    backgroundColor: '#A9A9A9',
    justifyContent: 'center',
    alignItems: 'center',
    height: oneFourthWindowHeight / 5,
    width: 70,
  },
  postButtonEnabled: {
    borderRadius: 30,
    backgroundColor: '#39A7FF',
    justifyContent: 'center',
    alignItems: 'center',
    height: oneFourthWindowHeight / 5,
    width: 70,
  },
  postButtonTextDisabled: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
  },
  postButtonTextEnabled: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default CreateTale;
