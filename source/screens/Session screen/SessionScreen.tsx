import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommentSection from '../../Components/CommentSection';

const SessionScreen = () => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <CommentSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#F8F6F4',
  },
  Text: {
    fontFamily: 'Montserrat-Bold',
    color: 'black',
  },
  Box: {
    width: 100,
    height: 100,
    backgroundColor: 'violet',
    borderRadius: 10,
    marginVertical: 50,
  },
});

export default SessionScreen;
