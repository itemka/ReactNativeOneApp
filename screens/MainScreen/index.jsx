import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList, //❗️
  Image, //❗️
  Dimensions,
} from 'react-native';
import { AddTodo, Todo } from '../../components';
import PropTypes from 'prop-types';
import styles from './styles';
import { THEME } from '../../utils/constants';

export const MainScreen = ({
  addTodo,
  todos,
  removeTodo,
  setTodoId,
}) => {
  const defaultWidth = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
  const [deviceWidth, setDeviceWidth] = useState(defaultWidth);

  useEffect(() => {
    const update = () => {
      const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
      setDeviceWidth(width);
    };

    Dimensions.addEventListener('change', update);
    return () => {
      Dimensions.removeEventListener('change', update);
    };
  });

  return (
    <View>
      <AddTodo addTodo={addTodo} todos={todos}/>
      {todos.length
        ? (
            <View style={{ width: deviceWidth }}>
              <FlatList
                keyExtractor={item => item.id.toString()} // react key ❗️
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
          )
        : (
          <View style={styles.imgWrap}>
            <Image style={styles.image} source={require('../../assets/empty.png')} />
            {/* ❗️ or source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}} */}
          </View>
        )
      }
    </View>
  );
};

MainScreen.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.instanceOf(Array).isRequired,
  removeTodo: PropTypes.func.isRequired,
  setTodoId: PropTypes.func.isRequired,
};
