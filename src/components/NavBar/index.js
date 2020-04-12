import React from "react";
import { View, Text } from "react-native";
import styles from './styles';
import PropTypes from 'prop-types';

export const NavBar = ({ title }) => (
  <View style={styles.navBar}>
    <Text style={styles.text}>
      {title}
    </Text>
  </View>
);

NavBar.defaultProps = {
  title: ``,
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};
