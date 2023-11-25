import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  StyleSheet,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CommentPopup = () => {
  const [isCommentVisible, setCommentVisible] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const translateY = new Animated.Value(500);

  const toggleCommentVisibility = () => {
    // setCommentVisible(!isCommentVisible);
    if (isCommentVisible) {
      Animated.timing(translateY, {
        toValue: 1000, // Slide off-screen
        duration: 300,
        useNativeDriver: true,
      }).start(() => setCommentVisible(false));
    } else {
      setCommentVisible(true);
      Animated.timing(translateY, {
        toValue: 0, // Slide in
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const addComment = () => {
    if (comment.trim() !== '') {
      setComments([...comments, {id: String(Date.now()), text: comment}]);
      setComment('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Your main content goes here */}

      {/* Comment Icon */}
      <TouchableOpacity onPress={toggleCommentVisibility}>
        {/* Replace the following with your comment icon */}
        {/* <Text>🗨️</Text> */}
        <Icon name="comment-outline" size={30} color={'black'} />
      </TouchableOpacity>

      {/* Comment Popup */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isCommentVisible}
        onRequestClose={toggleCommentVisibility}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Comments</Text>
            </View>
            <FlatList
              data={comments}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={styles.commentItem}>
                  <Text>{item.text}</Text>
                </View>
              )}
            />
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Add a comment..."
                value={comment}
                onChangeText={text => setComment(text)}
              />
              <TouchableOpacity onPress={addComment}>
                <Text style={styles.postButton}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  commentItem: {
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
  },
  postButton: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default CommentPopup;
