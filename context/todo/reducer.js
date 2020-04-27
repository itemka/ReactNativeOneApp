import { actionTypes } from '../types';

const handlers = {
  [actionTypes.ADD_TODO]: (state, { id, title }) => ({
    ...state,
    todos: [
      { id, title },
      ...state.todos,
    ],
  }),
  [actionTypes.REMOVE_TODO]: (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id),
  }),
  [actionTypes.UPDATE_TODO]: (state, { id, title }) => ({
    ...state,
    todos: state.todos.map(todo => todo.id === id ? { ...todo, title } : todo),
  }),
  [actionTypes.SHOW_LOADER]: state => ({ ...state, loading: true }),
  [actionTypes.HIDE_LOADER]: state => ({ ...state, loading: false }),
  [actionTypes.SHOW_ERROR]: (state, { error }) => ({ ...state, error }),
  [actionTypes.CLEAR_ERROR]: state => ({ ...state, error: null }),
  [actionTypes.FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),
  DEFAULT: state => state,
};

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handler.DEFAULT;
  return handler(state, action);
};
