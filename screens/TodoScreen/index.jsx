import React, { useState, useContext } from 'react';
import {
  View,
  // TODO Button,
  ScrollView, //❗
} from 'react-native';  
import styles from './styles';
import { THEME } from '../../utils/constants';
import {
  AppCard,
  EditModal,
  AppTextBold,
  AppButton,
} from '../../components';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { TodoContext } from '../../context/todo/context';
import { ScreenContext } from '../../context/screen/context';

export const TodoScreen = () => {
  const {
    removeTodo,
    updateTodo,
    todos,
  } = useContext(TodoContext);
  const { changeScreen, todoId } = useContext(ScreenContext);
  const [isModal, setModal] = useState(false);

  const todo = todos.find(item => item.id === todoId);

  const handleOnPressEdit = () => {
    setModal(true);
  };
  const handleCancleEdit = () => {
    setModal(false);
  };
  const handleSaveEdit = (newText) => {
    setModal(false);
    updateTodo(todo.id, newText);
  };
  const handleOnPressClose = () => {
    changeScreen(null);
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
        <AppTextBold style={styles.text}>{todo.title}</AppTextBold>
        <View style={{ ...styles.button, ...styles.buttonEdit }}>
          <AppButton
            onPress={handleOnPressEdit}
            color={THEME.EDIT_BUTTON_COLOR}
          >
            <FontAwesome name="edit" size={20}/>
          </AppButton>
        </View>
      </AppCard>
      <View style={styles.bottomButton}>
        <View style={styles.button}>
          <AppButton
            onPress={handleOnPressClose} 
            color={THEME.GREY_COLOR}
          >
            <AntDesign name="back" size={20}/>
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            onPress={handleOnPressRemove} 
            color={THEME.DANGER_COLOR}
          >
            {/* TODO Remove ❗️❗️❗️*/}
            <FontAwesome name="remove" size={20}/>
          </AppButton>
        </View>
      </View>
    </ScrollView>
  )
}

// TODO <Button ❗️❗️❗️
//   title="Close"
//   onPress={handleOnPressClose}
//   color={THEME.GREY_COLOR}
//   color="#757575"
//  />