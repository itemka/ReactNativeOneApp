import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native'; //❗️
import { TodoContext } from './context';
import { todoReducer } from './reducer';
import { actionTypes } from '../types';
import { ScreenContext } from '../screen/context';
import { HTTP } from '../../utils/http';

export const TodoState = ({ children }) => {
  const { changeScreen } = useContext(ScreenContext);
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };
  const baseURL = 'https://reactnative-todo-64d6c.firebaseio.com/';
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const fetchTodos = async () => {
    showLoader();
    clearError();

    try {
      const data  = await HTTP.get(baseURL + 'todos.json');
      const todos = data ? Object.keys(data).map(key => ({ ...data[key], id: key })) : [];
      dispatch({ type: actionTypes.FETCH_TODOS, todos });
    } catch (err) {
      showErrror('Fetch error :(');
    } finally {
      hideLoader();
    }
  };

  const addTodo = async title => {
    try {
      const data = await HTTP.post(baseURL + 'todos.json', { title });
      dispatch({ type: actionTypes.ADD_TODO, id: data.name, title });  
    } catch (err) {
      showErrror('Add error :(');
    }
  };

  const updateTodo = async (id, title) => {
    clearError();

    try {
      await HTTP.patch(baseURL + `todos/${id}.json`, { title });
      dispatch({ type: actionTypes.UPDATE_TODO, id, title });
    } catch (err) {
      showErrror('Updata error :(');
    }
  };

  const removeTodo = id => {
    Alert.alert( //❗️
      `Delete`,
      `Are you sure to delete ${state.todos.find(todo => todo.id === id).title}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: `Delete`,
          style: 'destructive',
          onPress: async () => {
            changeScreen(null);

            try {
              await HTTP.delete(baseURL + `todos/${id}.json`);
              dispatch({ type: actionTypes.REMOVE_TODO, id });
            } catch (err) {
              showErrror('Remove error :(');
            }
          }
        },
      ],
      { cancelable: false }, // the window will not be closing
    );
  };

  // private 
  const showLoader = () => dispatch({ type: actionTypes.SHOW_LOADER });
  const hideLoader = () => dispatch({ type: actionTypes.HIDE_LOADER });
  const showErrror = error => dispatch({ type: actionTypes.SHOW_ERROR, error });
  const clearError = () => dispatch({ type: actionTypes.CLEAR_ERROR });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        addTodo,
        removeTodo,
        updateTodo,
        fetchTodos,
      }}>
      {children}
    </TodoContext.Provider>
  );
};
