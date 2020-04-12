import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { AddTodo, Todo } from './../../components';

export const MainScreen = ({
  addTodo,
  todos,
  removeTodo,
  setTodoId,
}) => {
  return (
    <View>
      <AddTodo addTodo={addTodo} todos={todos}/>
        <FlatList
          keyExtractor={item => item.id.toString()} // react key
          data={todos}
          renderItem={({item}) => (
            <Todo
              todo={item}
              removeTodo={removeTodo}
              setTodoId={setTodoId}
            />
          )}
        />
    </View>
  );
};

const styles = StyleSheet.create({});
