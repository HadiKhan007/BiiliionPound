import {Platform, StatusBar, StyleSheet} from 'react-native';
import {WP, size, family, colors} from '../../../shared/exporter';

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
    marginVertical: 20,
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
  aiCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
