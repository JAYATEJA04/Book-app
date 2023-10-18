import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import SearchBar from '../../Components/SearchBar';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson);
        setFilteredData(responseJson);
      })
      .catch(error => console.log(error));
  }, []);

  const searchFilter = text => {
    if (text) {
      const newData = data.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearchQuery(text);
    } else {
      setFilteredData(data);
      setSearchQuery(text);
    }
  };

  const Items = ({item}) => {
    return (
      <View style={styles.Individual}>
        <Text style={styles.ItemText}>
          {item.id}. {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search..."
        value={searchQuery}
        onChangeText={text => searchFilter(text)}
        clearButtonMode="always"
        style={styles.itemContainer}
      />
      <FlatList
        data={filteredData}
        style={styles.ItemView}
        keyExtractor={(item, index) => index.toString()}
        renderItem={Items}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    padding: 5,
    height: 50,
  },
  Individual: {
    padding: 5,
  },
  ItemView: {
    width: '100%',
  },
  ItemText: {
    fontSize: 15,
    fontWeight: '200',
    color: 'black',
  },
});

export default SearchScreen;
