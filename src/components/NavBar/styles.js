import { StyleSheet } from "react-native";
import { THEME } from './../../utils/constants';

export default StyleSheet.create({
  navBar: {
    height: 110,
    backgroundColor: THEME.MAIN_COLOR,
    alignItems: `flex-start`,
    justifyContent: `center`,
    paddingTop: 50,
    paddingLeft: 20,
  },
  text: {
    color: THEME.WHITE,
    fontSize: 25,
    fontWeight: `bold`,
  }
});
