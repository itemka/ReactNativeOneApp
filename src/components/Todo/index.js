import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from './styles';
import PropTypes from 'prop-types';

export const Todo = ({
  todo,
  removeTodo,
  setTodoId,
}) => {
  const handleOnLongPress = () => {
    removeTodo(todo.id);
  };
  const handleOnPressTouchableOpacity = () => {
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

Todo.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
  removeTodo: PropTypes.func.isRequired,
  setTodoId: PropTypes.func.isRequired,
};
