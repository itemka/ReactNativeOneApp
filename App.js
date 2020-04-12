import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavBar } from './src/components';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todos, setTodos] = useState([
    { id: '1', title: 'test1' },
    { id: '2', title: 'test2' },
    { id: '3', title: 'test3' },
  ]);
  const [todoId, setTodoId] = useState('2');
  const addTodo = title => {
    setTodos(prev => [
      {
        id: Date.now().toString(),
        title
      },
      ...prev,
    ])
  };
  const removeTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id))
  };

  const selectedTodo = todos.find(item => item.id === todoId);

  return (
    <View>
      <NavBar title="My App"/>
      <View style={styles.container}>
        {!todoId
          ? (
            <MainScreen
              todos={todos}
              addTodo={addTodo}
              removeTodo={removeTodo}
              setTodoId={setTodoId}
            />
          )
          : (
            <TodoScreen
              setTodoId={setTodoId}
              todo={selectedTodo}
            />
          )
        }
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
