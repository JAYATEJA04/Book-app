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
import FAIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import LikeButton from '../../Components/LikeButton';
import CommentSection from '../../Components/CommentSection';
import { Commands } from 'react-native-pager-view/lib/typescript/PagerViewNativeComponent';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const oneFourthWindowHeight = windowHeight / 4;
const effectiveWidth = windowWidth - 2 * 20;
const Stack = createStackNavigator();

const SampleComponent = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
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
            <Text style={{color: 'grey'}}>
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
            <LikeButton />
          </View>
          {/* for comment button */}
          <View style={{margin: 10}}>
            {/* <FAIcon name="comment-outline" size={30} color={'black'} /> */}
            <CommentSection />
          </View>
          {/* for share button */}
          <View style={{margin: 10}}>
            <FAIcon name="share-outline" size={30} color={'black'} />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
            }}>
            <View style={{margin: 10}}>
              <TouchableOpacity>{}</TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SampleComponent;
