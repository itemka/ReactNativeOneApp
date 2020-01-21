import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import {NavBar} from "./src/components/NavBar";
import {AddTodo} from "./src/components/AddTodo";
import {Todo} from "./src/components/Todo";

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
      <NavBar title={`Todo App`}/>
      <View style={styles.container}>


        <AddTodo addTodo={addTodo} todos={todos}/>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({item}) => (
            <Todo
              todo={item}
              removeTodo={removeTodo}
              id={item.id}
            />
          )}
        />

        {/*        <View>
        {todos.map(item => <Todo key={item.id} todo={item}/>)}
        </View>*/}


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
