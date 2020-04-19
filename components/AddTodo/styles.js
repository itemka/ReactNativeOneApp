import { StyleSheet } from "react-native";
import { THEME } from '../../utils/constants';
 //❗️
export default StyleSheet.create({
  block: {
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    marginBottom: 15,
  },
  input: {
    padding: 10,
    width: `70%`,
    borderStyle: `solid`,
    borderBottomWidth: 1,
    borderColor: THEME.GREY_COLOR,
    borderBottomColor: `red`
  },
  button: {
    backgroundColor: `darkorange`,
    borderRadius: 5,
  }
});
