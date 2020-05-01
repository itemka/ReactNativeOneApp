import { StyleSheet, Dimensions } from "react-native";
import { THEME } from "../../utils/constants";

export default StyleSheet.create({
  wrapperFlatList: {
    height: Dimensions.get('window').height/4*2.5,
  },
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
  wrapperLoading: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
  },
  error: {
    flex: 1,
    fontSize: 20,
    color: THEME.DANGER_COLOR,
  },
});
