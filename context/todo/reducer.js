import { actionTypes } from '../types';

const handlers = {
  [actionTypes.ADD_TODO]: (state, { title }) => ({
    ...state,
    todos: [
      {
        id: Date.now().toString(),
        title,
      },
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
  DEFAULT: state => state,
};

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handler.DEFAULT;
  return handler(state, action);
};
