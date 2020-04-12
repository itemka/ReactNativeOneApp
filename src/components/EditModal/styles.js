import { StyleSheet } from "react-native";
import { THEME } from './../../utils/constants';

export default StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: `80%`,
  },
  buttons: {
    width: `100%`,
    marginTop: 20,
    flexDirection: `row`,
    justifyContent: `space-around`,
    alignItems: `center`,
  },
});
