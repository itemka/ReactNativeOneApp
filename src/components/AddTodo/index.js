import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
} from "react-native";
import styles from './styles';

export const AddTodo = ({addTodo}) => {
  const [inputText, setInputText] = useState(``);
  const handlePress = () => {
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
        placeholder="Input todo"
        autoCorrect={false}
        autoCapitalize='none'
        // TODO keyboardType="number-pad"
      />
      <Button
        title="Add"
        style={styles.button}
        onPress={handlePress}
      />
    </View>
  )
};
