import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Make sure to install and link this icon library
import RNPickerSelect from 'react-native-picker-select';

export default function DropdownInput() {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleIconPress = () => {
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Select an option"
          value={selectedValue}
          editable={false} 
        />
        <TouchableOpacity onPress={handleIconPress} style={styles.iconContainer}>
          <Ionicons name="ios-arrow-down" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <RNPickerSelect
        onValueChange={(value) => setSelectedValue(value)}
        items={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        style={{
          inputIOS: styles.dropdown,
          inputAndroid: styles.dropdown,
        }}
        placeholder={{ label: 'Select an option', value: null }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
  textInput: {
    flex: 1,
  },
  iconContainer: {
    paddingHorizontal: 8,
  },
  dropdown: {
    inputIOS: {
      height: 40,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      height: 40,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  },
});
