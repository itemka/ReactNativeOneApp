import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
import { THEME } from '../../utils/constants';

export const Loader = ({ isLoader, children }) => isLoader
  ? (
    <View style={styles.containerLoading}>
      <ActivityIndicator size="large" color={THEME.MAIN_COLOR} />
      <ActivityIndicator />
    </View>
  )
  : children;
