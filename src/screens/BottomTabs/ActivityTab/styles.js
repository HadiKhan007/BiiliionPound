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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnContainer: {
    width: 76,
    height: 30,
    borderRadius: 50,
    backgroundColor: colors.p1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: size.xxtiny,
    color: colors.white,
    fontFamily: family.OpenSans_Regular,
  },
  imageStyle: {
    height: 5,
    width: 9,
    resizeMode: 'contain',
    marginHorizontal: 5,
  },
});

export default styles;
