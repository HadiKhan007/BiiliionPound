import {Platform, StatusBar, StyleSheet} from 'react-native';
import {
  HP,
  WP,
  size,
  family,
  colors,
  scrHeight,
} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  contentContainer: {
    marginHorizontal: WP('5'),
    flex: 1,
  },
  itemConatiner: {
    flex: 1,
    backgroundColor: colors.white,
  },
  btnContainer: {
    height: 32,
    width: 112,
    borderRadius: 4,
    backgroundColor: colors.p1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyles: {
    fontSize: size.tiny,
    color: colors.white,
    fontFamily: family.OpenSans_Regular,
  },
  aiCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  readMoreStyle: {
    color: colors.p1,
    fontFamily: family.OpenSans_Regular,
    fontSize: size.xsmall,
  },
  unreadStyle: {
    color: colors.p1,
    fontFamily: family.OpenSans_Regular,
    fontSize: size.xsmall,
    paddingVertical: 10,
  },
});

export default styles;
