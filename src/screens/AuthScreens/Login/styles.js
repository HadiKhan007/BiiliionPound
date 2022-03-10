import {StyleSheet} from 'react-native';
import {
  HP,
  WP,
  size,
  family,
  colors,
  scrHeight,
} from '../../../shared/exporter';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  welcomeTextContainer: {
    alignItems: 'center',
    marginVertical: HP('3'),
  },
  contentContainer: {
    marginHorizontal: WP('5'),
  },
  inputContainer: {
    height: scrHeight / 2,
  },
  forgotTxtStyle: {
    fontSize: size.tiny,
    top: 5,
    fontFamily: family.OpenSans_Regular,
    color: colors.g2,
    textAlign: 'right',
    marginHorizontal: WP('5'),
    textDecorationLine: 'underline',
  },
});

export default styles;
