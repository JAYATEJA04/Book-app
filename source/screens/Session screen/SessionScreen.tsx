import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import store, {decrement, increment} from './store';
import {Provider} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';

const SessionScreen = () => {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>hi, this where your session happens</Text>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Counter: {counter}</Text>
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
      </View>
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
});

export default SessionScreen;
