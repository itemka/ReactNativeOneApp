import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavBar } from './components';
import { THEME } from './utils/constants';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { ScreenContext } from './context/screen/context';

export const Layout = () => {
  const { todoId } = useContext(ScreenContext);
  
  return (
    <View>
      <NavBar title="My App"/>
      <View style={styles.container}>
        {!todoId ? <MainScreen /> : <TodoScreen />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({  //❗️
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: THEME.PADDING_VERTICAL,
  },
});
