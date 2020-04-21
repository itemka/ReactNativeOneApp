import React from 'react';
import { View, TouchableOpacity /*❗️*/ } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { AppText } from '../ui/AppText';

export const Todo = ({
  todo,
  removeTodo,
  changeScreen,
}) => {
  const handleOnLongPress = (e) => {
    removeTodo(todo.id);
  };
  const handleOnPressTouchableOpacity = () => {
    changeScreen(todo.id);
  };

  return (
    <TouchableOpacity
      activeOpasity={0.5}
      onPress={handleOnPressTouchableOpacity}
      onLongPress={handleOnLongPress}
    >
      <View style={styles.todo}>
        <AppText style={styles.text}>
          {todo.title}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

Todo.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
  removeTodo: PropTypes.func.isRequired,
  changeScreen: PropTypes.func.isRequired,
};
