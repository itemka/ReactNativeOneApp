import { StyleSheet } from "react-native";

export default StyleSheet.create({
  imgWrap: {
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: 10,
    height:  300,
  },
  image: {
    width: `100%`,
    height: `100%`,
    resizeMode: `contain`,
  },
});
