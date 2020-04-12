import { StyleSheet } from "react-native";
import { THEME } from './../../utils/constants';

export default StyleSheet.create({
  todo: {
    marginTop: 10,
    flexDirection: `row`,
    alignItems: `center`,
    padding: 10,
    borderWidth: 1,
    borderColor: THEME.BORDER_COLOR,
    borderRadius: 5,
  },
  text: {
    width: `70%`,
    marginRight: 20,
    fontSize: 20
  },
});
