import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { THEME } from './../../utils/constants';
import { AppCard, EditModal } from '../../components';
import PropTypes from 'prop-types';

export const TodoScreen = ({
  setTodoId,
  todo,
  removeTodo,
  saveEditTodo,
}) => {
  const [isModal, setModal] = useState(false);
  const handleOnPressEdit = () => {
    setModal(true);
  };
  const handleCancleEdit = () => {
    setModal(false);
  };
  const handleSaveEdit = (newText) => {
    setModal(false);
    saveEditTodo(todo.id, newText);
  };
  const handleOnPressClose = () => {
    setTodoId(null);
  };
  const handleOnPressRemove = () => {
    removeTodo(todo.id);
  };

  return (
    <ScrollView style={styles.card}>
      <EditModal
        isModal={isModal}
        value={todo.title}
        handleCancleEdit={handleCancleEdit}
        handleSaveEdit={handleSaveEdit}
      />
      <AppCard>
        <Text style={styles.text}>{todo.title}</Text>
        <View style={styles.button}>
          <Button
            title="Edit"
            onPress={handleOnPressEdit}
            color={THEME.EDIT_BUTTON_COLOR}
          />
        </View>
      </AppCard>
      <View style={styles.bottomButton}>
        <View style={styles.button}>
          <Button
            title="Close"
            onPress={handleOnPressClose}
            color={THEME.GREY_COLOR}
            color="#757575"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Remove"
            onPress={handleOnPressRemove}
            color={THEME.DANGER_COLOR}
          />
        </View>
      </View>
    </ScrollView>
  )
}

TodoScreen.propTypes = {
  setTodoId: PropTypes.func.isRequired,
  todo: PropTypes.instanceOf(Object).isRequired,
  removeTodo: PropTypes.func.isRequired,
  saveEditTodo: PropTypes.func.isRequired,
};
