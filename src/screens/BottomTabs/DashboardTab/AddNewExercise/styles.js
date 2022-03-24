import {Platform, StatusBar, StyleSheet} from 'react-native';
import {
  HP,
  WP,
  size,
  family,
  colors,
  scrHeight,
  scrWidth,
} from '../../../../shared/exporter';

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
  itemContainer: {
    height: scrHeight / 1.35,
  },
  titleStyle: {
    fontSize: size.tiny,
    color: colors.g1,
    fontFamily: family.OpenSans_Regular,
    paddingLeft: WP('8'),
    paddingVertical: 5,
  },
  inputIcon: {
    width: 6,
    height: 10,
    resizeMode: 'contain',
    tintColor: colors.g6,
  },
  aiEnd: {
    alignItems: 'flex-end',
  },
});

export default styles;
