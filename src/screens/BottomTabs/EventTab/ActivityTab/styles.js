import {Dimensions, Platform, StatusBar, StyleSheet} from 'react-native';
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
    alignItems: 'center',
  },
  contentContainer: {
    marginHorizontal: WP('5'),
    flex: 1,
  },
  containerTab: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  leftTab: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  leftTabbar: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginTop: 10,
    borderBottomColor: colors.p1,
  },
  rightTab: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  rightTabbar: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginTop: 10,
    borderBottomColor: colors.p1,
  },
  tabTextStyle: {
    color: colors.g1,
    fontSize: size.normal,
    fontFamily: family.OpenSans_SemiBold,
  },
});
export default styles;
