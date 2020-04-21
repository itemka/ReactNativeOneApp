import React, { useReducer } from 'react';
import { ScreenContext } from './context';
import { screenReducer } from './reducer';
import { actionTypes } from '../types';

export const ScreenState = ({ children }) => {
  const [state, dispatch] = useReducer(screenReducer, null);

  const changeScreen = id => dispatch({type: actionTypes.CHANGE_SCREEN, payload: id });

  return (
    <ScreenContext.Provider
      value={{
        changeScreen,
        todoId: state,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};
