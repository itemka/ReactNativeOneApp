import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  text: {
    width: `50%`,
  },
  bottomButton: {
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    marginBottom: 15,
  },
  button: {
    borderRadius: 5,
    padding: 5,
    width: Dimensions.get('window').width / 3, // for adaptive styles❗️
  },
  buttonEdit: {
    width: Dimensions.get('window').width / 6,
  },
});
