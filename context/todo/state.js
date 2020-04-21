import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native'; //❗️
import { TodoContext } from './context';
import { todoReducer } from './reducer';
import { actionTypes } from '../types';
import { ScreenContext } from '../screen/context'

export const TodoState = ({ children }) => {
  const { changeScreen } = useContext(ScreenContext);
  const initialState = {
    todos: [
      { id: 1, title: `React Native` }
    ],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const addTodo = title => dispatch({ type: actionTypes.ADD_TODO, title });
  const updateTodo = (id, title) => dispatch({ type: actionTypes.UPDATE_TODO, id, title });
  const removeTodo = id => {
    Alert.alert( //❗️
      `Delete`,
      `Are you sure to delete ${state.todos.find(todo => todo.id === id).title}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: `Delete`,
          style: 'destructive',
          onPress: () => {
            changeScreen(null);
            dispatch({ type: actionTypes.REMOVE_TODO, id });
          }
        },
      ],
      { cancelable: false }, // the window will not be closing
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo,
      }}>
      {children}
    </TodoContext.Provider>
  );
};
