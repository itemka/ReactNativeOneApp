import { StyleSheet } from "react-native";

export default StyleSheet.create({
  todo: {
    marginTop: 10,
    flexDirection: `row`,
    alignItems: `center`,
    padding: 10,
    borderWidth: 1,
    borderColor: `#eee`,
    borderRadius: 5,
  },
  text: {
    width: `70%`,
    marginRight: 20,
    fontSize: 20
  },
  close: {
    width: 30,
    height: 30,
    backgroundColor: `blue`,
  }
});
