import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import SampleComponent from './SampleComponent';
import CircularButton from '../../Components/HomeScreen/CreatePostButton';
import CreateTale from '../../Components/HomeScreen/CreatePostScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const oneFourthWindowHeight = windowHeight / 4;
const effectiveWidth = windowWidth - 2 * 20;
const Stack = createStackNavigator();
const HeartIcon = <Icon name="heart" size={30} color="red" />;
const EmptyHeartIcon = <Icon name="heart" size={30} color="gray" />;
const Comment = <Icon name="comment" size={30} color="red" />;
const Filledcomment = <Icon name="comment" size={30} color="gray" />;
const Share = <Icon name="share" size={30} />;
const BookMark = <Icon name="bookmark" size={30} />;

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeLayout}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Notify" component={NotificationScreen} />
      <Stack.Screen
        name="Create"
        component={CreateTale}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
};

const NotificationScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>Notification screen</Text>
    </View>
  );
};

const CameraScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>Camera screen</Text>
    </View>
  );
};

const HomeLayout = () => {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.MenuBar}>
        <View style={styles.BellIcon}>
          <Pressable onPress={() => navigation.navigate('Camera')}>
            <Icon name="camera" color="black" size={25} solid />
          </Pressable>
        </View>
        <Text style={styles.TitleText}>Books & Tales</Text>
        <View style={styles.BellIcon}>
          <Pressable onPress={() => navigation.navigate('Notify')}>
            <Icon name="bell" color="black" size={25} solid />
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <SampleComponent />
      </ScrollView>
      <CircularButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#F8F6F4',
  },
  MenuBar: {
    // padding: 5,
    // height: 70,
    width: '100%',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // borderWidth: 1,
  },
  TitleText: {
    flex: 10,
    textAlign: 'center',
    fontFamily: 'DancingScript-Bold',
    fontSize: 30,
    color: 'black',
    // borderWidth: 1,
  },
  BellIcon: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
    // borderWidth: 1,
  },
  ButtonContainer: {
    backgroundColor: 'blue', // Button background color
    borderRadius: 50, // Make it circular
    width: 50, // Adjust width and height as needed
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Position it wherever you need
    bottom: 20,
    right: 20,
    elevation: 5,
  },
});
export default HomeScreen;
