import React, { useState } from 'react';
import {
  StyleSheet, //❗️
  View,
  Alert,
} from 'react-native';
import { AppLoading } from 'expo'; //❗️
import { NavBar } from './components';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { loadApplication } from './utils/helper';
import { THEME } from './utils/constants';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(null);

  //❗️
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    )
  }

  const addTodo = title => {
    setTodos(prev => [
      {
        id: Date.now().toString(),
        title,
      },
      ...prev,
    ])
  };

  const removeTodo = id => {
    const currentToto = todos.find(t => t.id === id);
    //❗️
    Alert.alert(
      'Delete',
      `Are you sure to delete ${currentToto.title}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setTodoId(null);
            setTodos(prev => prev.filter(item => item.id !== id));
          }
        },
      ],
      {cancelable: false}, // the window will not be closing
    );
  };

  const saveEditTodo = (todoId, title) => {
    setTodos( prev => prev.map(item => item.id === todoId ? { ...item, title } : item ));
  };

  const selectedTodo = todos.find(item => item.id === todoId);

  return (
    <View>
      <NavBar title="My App"/>
      <View style={styles.container}>
        {!todoId //❗️
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
              removeTodo={removeTodo}
              saveEditTodo={saveEditTodo}
            />
          )
        }
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: THEME.PADDING_VERTICAL,
  },
});
