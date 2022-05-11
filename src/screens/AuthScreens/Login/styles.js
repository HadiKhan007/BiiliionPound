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
  rowContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberTxtStyle: {
    fontSize: size.tiny,
    top: 2.5,
    marginHorizontal: WP('2'),
    fontFamily: family.OpenSans_Regular,
    color: colors.g2,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  forgotTxtStyle: {
    fontSize: size.tiny,
    top: 2.5,
    fontFamily: family.OpenSans_Regular,
    color: colors.g2,
    textAlign: 'right',
    marginHorizontal: WP('1'),
    textDecorationLine: 'underline',
  },
});

export default styles;
