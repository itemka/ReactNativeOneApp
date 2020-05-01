import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import styles from './styles';
import { AppTextBold } from '../ui/AppTextBold';
import { THEME } from '../../utils/constants';

export const AppButton = ({
  onPress,
  color = THEME.MAIN_COLOR,
  children,
}) => {
  const Wrapper = Platform.OS === `androind`
    ? TouchableNativeFeedback //❗️
    : TouchableOpacity;

  return (
    <Wrapper onPress={onPress} activeOpasity={0.7}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <AppTextBold style={styles.text}>
          {children}
        </AppTextBold>
      </View>
  </Wrapper>
  )
};
