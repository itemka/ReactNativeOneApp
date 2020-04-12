import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

export const AppCard = ({ children, style }) => (
  <View style={{ ...styles.edit, ...style }}>
    {children}
  </View>
);

AppCard.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  style: PropTypes.instanceOf(Object),
};
