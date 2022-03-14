import {Platform, StatusBar, StyleSheet} from 'react-native';
import {WP, HP, size, family, colors} from '../../../shared/exporter';

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
    marginTop: 20,
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
  otpInputBox: {},
  otpInput: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    backgroundColor: colors.white,
    height: HP('9'),
    width: HP('9'),
    margin: HP('0.7'),
    alignItems: 'center',
    borderRadius: HP('8'),
    marginVertical: HP('2'),
    justifyContent: 'center',
    borderWidth: 1,
  },
  txtStyle: {
    fontFamily: family.OpenSans_Bold,
    fontSize: size.h5,
    width: '70%',
    textAlign: 'center',
    color: colors.b8,
  },
  aiFlexEnd: {
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  resendText: {
    fontSize: size.tiny,
    color: colors.g9,
    fontFamily: family.OpenSans_Regular,
  },
  digitStyle: {
    backgroundColor: 'transparent',
  },
  textRow: {
    alignItems: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: size.tiny,
    color: colors.p1,
    fontFamily: family.OpenSans_Regular,
  },
});

export default styles;
