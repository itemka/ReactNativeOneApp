import * as Font from 'expo-font'; //❗️

// fonts ❗️
export const loadApplication = async () => {
  await Font.loadAsync({
    robotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    robotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
  });
};
