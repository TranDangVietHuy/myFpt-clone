import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Search } from 'lucide-react-native';

const SearchBar = ({ value, onChangeText, placeholder = "Type feature's name" }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        {/* Search Icon */}
        <Search 
          size={20} 
          color="#8E8E93" 
          style={styles.searchIcon} 
        />
        
        {/* Input Field */}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={value}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    width: '100%',
    height: '100%',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9e5e8', 
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 30,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#444',
    paddingVertical: 0, // Removes default Android padding
  },
});

export default SearchBar;