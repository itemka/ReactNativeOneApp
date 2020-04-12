import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from './styles';

export const Todo = ({
  todo,
  removeTodo,
  setTodoId,
}) => {
  const handleOnLongPress = () => {
    removeTodo(id);
  };

  const handleOnPressTouchableOpacity = () => {
    console.log(`todo.id: `, todo.id);
    setTodoId(todo.id);
  };

  return (
    <TouchableOpacity
      activeOpasity={0.5}
      onPress={handleOnPressTouchableOpacity}
      onLongPress={handleOnLongPress}
    >
      <View style={styles.todo}>
        <Text style={styles.text}>
          {todo.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
