import { StyleSheet } from "react-native";

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
    borderColor: `gray`,
    borderBottomColor: `red`
  },
  button: {
    backgroundColor: `limegreen`,
    borderRadius: 5,
  }
});
