import React from "react";
import { View, Platform } from "react-native";
import styles from './styles';
import PropTypes from 'prop-types';
import { AppTextBold } from '../ui/AppTextBold';

export const NavBar = ({ title }) => {
  return (
    <View style={{
      ...styles.navBar,
      ...Platform.select({ //❗️
        ios: styles.navBarIOS,
        android: styles.navBarAndroid,
      })
    }}>
      <AppTextBold style={styles.text}>
        {title}
      </AppTextBold>
    </View>
  );
};

NavBar.defaultProps = {
  title: ``,
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};
