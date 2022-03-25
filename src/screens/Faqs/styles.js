import {Platform, StatusBar, StyleSheet} from 'react-native';
import {
  HP,
  WP,
  size,
  family,
  colors,
  scrHeight,
  appRadius,
} from '../../shared/exporter';

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
  titleStyle: {
    fontSize: size.tiny,
    color: colors.b1,
    fontFamily: family.OpenSans_SemiBold,
  },
  imageStyle: {
    height: 12,
    width: 12,
    resizeMode: 'contain',
    tintColor: colors.b1,
    marginRight: 10,
  },
  cardContainer: {
    paddingHorizontal: 10,
    height: 44,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.light_shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  subtitleContainer: {
    backgroundColor: colors.g10,
    padding: 10,
    marginHorizontal: WP('5'),
    borderRadius: 10,
    top: -15,
    paddingVertical: 20,
  },
  subtitleStyle: {
    color: colors.b1,
    fontSize: size.tiny,
    fontFamily: family.OpenSans_Regular,
  },
});

export default styles;
