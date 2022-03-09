import {StyleSheet} from 'react-native';
import {HP, WP, size, family, colors, scrHeight} from '../../shared/exporter';

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
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textDecoration: {
    textDecorationLine: 'underline',
  },
});

export default styles;
