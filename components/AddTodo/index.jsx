import React, { useState } from "react";
import {
  View, //❗️
  TextInput, //❗️
  Button, //❗️
  Alert, //❗️
  Keyboard,
} from "react-native";
import styles from './styles'; //❗️
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';

export const AddTodo = ({ addTodo }) => {
  const [inputText, setInputText] = useState(``);
  const handlePress = () => {
    if (inputText.trim()) {
      addTodo(inputText);
      setInputText(``);
      Keyboard.dismiss(); // hide❗️
    } else {
      setInputText(``);
      Alert.alert(`Input is empty!`) //❗️
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={text => setInputText(text)}
        placeholder="Input todo"
        autoCorrect={false}
        autoCapitalize='none'
        // TODO keyboardType="number-pad"
      />
      <AntDesign.Button
        onPress={handlePress}
        style={styles.button}
        name="pluscircleo"
      >
        Add
      </AntDesign.Button>
    </View>
  )
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
