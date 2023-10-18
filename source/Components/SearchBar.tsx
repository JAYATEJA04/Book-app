import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        clearButtonMode="always"
        placeholder="Search...."
        value={searchQuery}
        onChangeText={query => setSearchQuery(query)}
        onSubmitEditing={handleSearch}
        style={styles.SearchBar}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  SearchBar: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 9,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default SearchBar;
