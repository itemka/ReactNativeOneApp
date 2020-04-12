import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from './styles';

export const Todo = ({
  todo,
  removeTodo,
  id,
}) => {
  const handleOnLongPress = () => {
    removeTodo(id);
  };

  return (
    <TouchableOpacity
      activeOpasity={0.5}
      onPress={() => { console.log(`todo.id: `, todo.id) }}
      onLongPress={handleOnLongPress}
    >
      <View style={styles.todo}>
        <Text style={styles.text}>
          {todo.title}
        </Text>
        <Button
          title="Close"
          onPress={() => removeTodo(id)}
          style={styles.close}
        />
      </View>
    </TouchableOpacity>
  );
};
