import {Platform, StatusBar, StyleSheet} from 'react-native';
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  contentContainer: {
    marginHorizontal: WP('5'),
    flex: 1,
  },
  inputContainer: {
    height: scrHeight / 2,
  },
  rememberTxtStyle: {
    width: '70%',
    fontSize: size.xxtiny,
    top: 5,
    fontFamily: family.OpenSans_Regular,
    color: colors.g2,
  },
  rememberTxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  textDecoration: {
    textDecorationLine: 'underline',
  },
});

export default styles;
