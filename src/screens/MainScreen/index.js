import React from 'react';
import {
  View,
  FlatList,
  Image,
} from 'react-native';
import { AddTodo, Todo } from './../../components';
import PropTypes from 'prop-types';
import styles from './styles';

export const MainScreen = ({
  addTodo,
  todos,
  removeTodo,
  setTodoId,
}) => (
  <View>
    <AddTodo addTodo={addTodo} todos={todos}/>
    {todos.length
      ? (
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
        )
      : (
        <View style={styles.imgWrap}>
          <Image style={styles.image} source={require('../../../assets/empty.png')} />
          {/* or source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}} */}
        </View>
      )
    }
  </View>
);

MainScreen.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.instanceOf(Array).isRequired,
  removeTodo: PropTypes.func.isRequired,
  setTodoId: PropTypes.func.isRequired,
};
