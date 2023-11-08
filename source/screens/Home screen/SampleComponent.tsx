import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

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

const SampleComponent = () => {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState(false);

  const handleLike = () => {
    setLiked(true);
  };

  const handleComment = () => {
    setComment(true);
  };

  return (
    <View
      style={{
        // borderWidth: 1,
        // position: 'relative',
        // margin: 10,
        height: 'auto',
        margin: 10,
      }}>
      {/* sample component view */}
      <View
        style={{
          height: 'auto',
          elevation: 3,
          backgroundColor: 'white',
          borderRadius: 8,
          shadowColor: 'black',
          padding: 10,
          // borderWidth: 1,
        }}>
        {/* for profile pic and profile name */}
        <View style={{flexDirection: 'row'}}>
          <View style={{}}>
            <Image
              source={require('../../../assets/Photos/me.jpg')}
              style={{height: 50, width: 50, borderRadius: 50}}
            />
          </View>
          <View style={{left: 10, top: 10}}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Jaya Teja</Text>
          </View>
        </View>
        {/* FOR highlight, post and READ MORE */}
        <View style={{padding: 10}}>
          {/* for highlight of the post */}
          <View style={{}}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
              Tales on SHOE DOG.
            </Text>
          </View>
          {/* for post text */}
          <View style={{padding: 10, flexWrap: 'nowrap'}}>
            <Text>
              "Shoe Dog" is Phil Knight's memoir, recounting the tumultuous
              journey of Nike's founding and rise to a global giant in
              sportswear. The book delves into the challenges, risks, and
              triumphs of entrepreneurship, offering a captivating narrative of
              Nike's evolution from a startup to an iconic athletic powerhouse,
              with all its trials and victories.
            </Text>
          </View>
          {/* for READ ME */}
          <View style={{padding: 10}}>
            <Text style={{color: '#39A7FF'}}>READ MORE</Text>
          </View>
        </View>
        {/* for like, comment, share and bookmark */}
        <View style={{flexDirection: 'row'}}>
          {/* for like button */}
          <View style={{margin: 10}}>
            <TouchableOpacity onPress={handleLike}>
              {liked ? HeartIcon : EmptyHeartIcon}
            </TouchableOpacity>
          </View>
          {/* for comment button */}
          <View style={{margin: 10}}>
            <TouchableOpacity onPress={handleComment}>
              {comment ? Comment : Filledcomment}
            </TouchableOpacity>
          </View>
          {/* for share button */}
          <View style={{margin: 10}}>
            <TouchableOpacity>{Share}</TouchableOpacity>
          </View>
          <View style={{margin: 10}}>
            <TouchableOpacity>{BookMark}</TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SampleComponent;