import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import {
  NavBar,
  AddTodo,
  Todo,
} from './src/components';

export default function App() {
  const [todos, setTodos] = useState([]);
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

  return (
    <View>
      <NavBar title="My App"/>
      <View style={styles.container}>
        <AddTodo addTodo={addTodo} todos={todos}/>
        <FlatList
          keyExtractor={item => item.id.toString()} // react key
          data={todos}
          renderItem={({item}) => (
            <Todo
              todo={item}
              removeTodo={removeTodo}
              id={item.id}
            />
          )}
        />
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
