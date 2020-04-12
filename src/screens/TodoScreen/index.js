import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';
import styles from './styles';

export const TodoScreen = ({
  setTodoId,
  todo,
}) => {
  const handleOnPressEdit = () => {

  }
  const handleOnPressClose = () => {
    setTodoId(null);
  }
  const handleOnPressRemove = () => {

  }

  return (
    <ScrollView>
      <View style={styles.edit}>
        <Text style={styles.text}>{todo.title}</Text>
        <View style={styles.button}>
          <Button
            title="Edit"
            onPress={handleOnPressEdit}
            color="tan"
          />
        </View>
      </View>
      <View style={styles.bottomButton}>
        <View style={styles.button}>
          <Button
            title="Close"
            onPress={handleOnPressClose}
            color="#757575"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Remove"
            onPress={handleOnPressRemove}
            color="#e53935"
          />
        </View>
      </View>
    </ScrollView>
  )
}
