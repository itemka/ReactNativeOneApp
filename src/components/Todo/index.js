import React from "react";
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from "react-native";

export const Todo = ({todo, removeTodo, id}) => {

  return (
    <TouchableOpacity
      activeOpasity={0.5}
      onPress={() => {
        console.log(`todo.id: `, todo.id)
      }}
      onLongPress={() => removeTodo(id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  todo: {
    marginTop: 10,
    flexDirection: `row`,
    alignItems: `center`,
    padding: 15,
    borderWidth: 1,
    borderColor: `#eee`,
    borderRadius: 5,
  }
});
