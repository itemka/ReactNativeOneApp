import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import {
  View,
  FlatList, //❗️
  Image, //❗️
  Dimensions,
} from 'react-native';
import { AddTodo, Todo, AppText, AppButton } from '../../components';
import styles from './styles';
import { THEME } from '../../utils/constants';
import { TodoContext } from '../../context/todo/context';
import { ScreenContext } from '../../context/screen/context';
import { Loader } from '../../components/Loader';

export const MainScreen = () => {
  const {
    todos,
    addTodo,
    removeTodo,
    fetchTodos,
    loading,
    error,
   } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);

  const getWidth = () => Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;

  const defaultWidth = getWidth();
  const [deviceWidth, setDeviceWidth] = useState(defaultWidth);

  const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);

  useEffect(() => {
    loadTodos();
  }, [])
  
  useEffect(() => {
    const update = () => {
      const width = getWidth();
      setDeviceWidth(width);
    };

    Dimensions.addEventListener('change', update);
    return () => {
      Dimensions.removeEventListener('change', update);
    };
  });

  if (error) {
    return (
      <View style={styles.center}>
        <AppText style={styles.error}>
          {error}
        </AppText>
        <AppButton onPress={loadTodos}>
          Repeat
        </AppButton>
      </View>
    )
  }

  return (
    <View styles={styles.wrapperLoading}>
      <AddTodo addTodo={addTodo} todos={todos}/>
      <Loader loading={loading}>
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
                      changeScreen={changeScreen}
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
      </Loader>
    </View>
  );
};
