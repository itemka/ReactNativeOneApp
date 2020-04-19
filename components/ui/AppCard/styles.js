import { StyleSheet } from "react-native";
import { THEME } from '../../../utils/constants';

export default StyleSheet.create({
  edit: {
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    marginBottom: 15,
    backgroundColor: THEME.EDIT_COLOR,
    padding: 20,
    shadowColor: `#000`,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    borderRadius: 10,
    elevation: 8,
  },
});
 