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
    backgroundColor: colors.p1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  firstConatiner: {
    height: '20%',
    backgroundColor: colors.p1,
  },
  contentContainer: {
    marginHorizontal: WP('5'),
    flex: 1,
  },
  itemConatiner: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: -WP('5'),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  headerContainer: {
    height: 60,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: colors.shadowColor,
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: -20,
  },
  countStyle: {
    fontSize: size.xsmall,
    color: colors.p1,
    fontFamily: family.OpenSans_SemiBold,
  },
});

export default styles;
