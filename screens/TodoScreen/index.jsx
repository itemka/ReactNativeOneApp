import React, { useState } from 'react';
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
import PropTypes from 'prop-types';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

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

TodoScreen.propTypes = {
  setTodoId: PropTypes.func.isRequired,
  todo: PropTypes.instanceOf(Object).isRequired,
  removeTodo: PropTypes.func.isRequired,
  saveEditTodo: PropTypes.func.isRequired,
};


// TODO <Button ❗️❗️❗️
//   title="Close"
//   onPress={handleOnPressClose}
//   color={THEME.GREY_COLOR}
//   color="#757575"
//  />