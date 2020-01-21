import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const NavBar = ({title = ``}) => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  navBar: {
    height: 70,
    backgroundColor: `#4e5f7f`,
    alignItems: `center`,
    justifyContent: `center`,
    paddingTop: 15,
  },
  text: {
    color: `white`,
    fontSize: 18,
  }
});
