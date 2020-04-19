import { StyleSheet } from "react-native";
import { THEME } from '../../utils/constants';

export default StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  text: {
    color: THEME.WHITE,
  }
});
