import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Button, Alert} from "react-native";

export const AddTodo = ({addTodo}) => {
  const [inputText, setInputText] = useState(``);
  const pressHandler = () => {
    if (inputText.trim()) {
      addTodo(inputText);
      setInputText(``);
    } else {
      setInputText(``);
      Alert.alert(`Input is empty!`)
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={text => setInputText(text)}
        placeholder={`Input todo`}
        autoCorrect={false}
        autoCapitalize='none'
        // keyboardType="number-pad"
      />
      <Button
        title={`Add`}
        style={styles.button}
        onPress={pressHandler}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  block: {
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    marginBottom: 15,
  },
  input: {
    padding: 10,
    width: `70%`,
    borderStyle: `solid`,
    borderBottomWidth: 1,
    borderColor: `gray`,
    borderBottomColor: `red`
  },
  button: {}
});
