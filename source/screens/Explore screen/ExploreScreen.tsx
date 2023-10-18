import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

const Box = ({number}) => {
  let genreName;

  switch (number) {
    case 1:
      genreName = 'Philosophy';
      break;
    case 2:
      genreName = 'Self help';
      break;
    case 3:
      genreName = 'Biography';
      break;
    case 4:
      genreName = 'Spiritual';
      break;
    case 5:
      genreName = 'Fiction';
      break;
    case 6:
      genreName = 'Non-fiction';
      break;
    case 7:
      genreName = 'Thrillers';
      break;
    case 8:
      genreName = 'Mystery';
      break;
    case 9:
      genreName = 'Fantasy';
      break;
    case 10:
      genreName = 'History';
      break;
    default:
      genreName = 'default text';
  }
  return (
    <View>
      <TouchableOpacity style={styles.Box}>
        <Image
          style={{height: 90, width: 100}}
          source={require('../../../assets/Photos/brain.jpg')}
        />
      </TouchableOpacity>
      <Text style={styles.boxText}>{genreName}</Text>
    </View>
  );
};

const ExploreScreen = () => {
  const boxes = Array.from({length: 10}, (_, index) => index + 1);

  return (
    <View style={styles.container}>
      <View style={styles.leftBox}>
        {boxes.slice(0, 5).map(boxNumber => (
          <Box key={boxNumber} number={boxNumber} />
        ))}
      </View>
      <View style={styles.rightBox}>
        {boxes.slice(5, 10).map(boxNumber => (
          <Box key={boxNumber} number={boxNumber} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  Box: {
    height: 100,
    width: 150,
    elevation: 1,
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    // borderWidth: 1,
  },
  leftBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExploreScreen;
