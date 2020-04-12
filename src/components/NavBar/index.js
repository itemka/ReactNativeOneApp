import React from "react";
import { View, Text } from "react-native";
import styles from './styles';

export const NavBar = ({ title = `` }) => (
  <View style={styles.navBar}>
    <Text style={styles.text}>
      {title}
    </Text>
  </View>
);
