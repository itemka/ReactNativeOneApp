import { StyleSheet, Platform } from "react-native";
import { THEME } from '../../utils/constants';

export default StyleSheet.create({
  navBar: {
    height: 110,
    alignItems: `flex-start`,
    justifyContent: `center`,
    paddingTop: 50,
    paddingLeft: 20,
  },
  navBarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  navBarIOS: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 0.3,
  },
  text: {
    color: Platform.OS === "android" ? THEME.WHITE : THEME.MAIN_COLOR,
    fontSize: 25,
    fontWeight: `bold`,
  }
});
