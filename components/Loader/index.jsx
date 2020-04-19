import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

export const Loader = ({ isLoader, children }) => !isLoader
  ? (
    <View style={styles.containerLoading}>
      <ActivityIndicator size="large" color="#0000ff" />
      <ActivityIndicator />
    </View>
  )
  : children;
