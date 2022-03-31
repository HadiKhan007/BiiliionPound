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
  cardInputStyle: {
    width: '100%',
    height: 45,
    left: -10,
  },
  cardStyle: {
    backgroundColor: colors.white,
    color: colors.b1,
    fontSize: size.xsmall,
  },
  fieldContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.g6,
    marginVertical: 10,
    width: '100%',
  },
});

export default styles;
