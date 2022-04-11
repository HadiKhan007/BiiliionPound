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
  },
  contentContainer: {
    marginHorizontal: WP('5'),
    flex: 1,
  },

  itemView: {
    alignItems: 'center',
    marginVertical: WP('2'),
  },
  countStyle: {
    fontSize: size.tiny,
    color: colors.p1,
    fontFamily: family.OpenSans_SemiBold,
  },
  cardContainer: {
    // width: '90%',
    marginVertical: WP('1'),
    // flexDirection: 'row',
    // height: 60,
    // marginHorizontal: WP('3'),
    // backgroundColor: 'green',
  },
  cardLeftContainer: {
    backgroundColor: colors.p5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  icon44: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  rightContainer: {
    width: '70%',
    marginLeft: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    fontFamily: family.OpenSans_SemiBold,
    fontSize: size.xsmall,
    color: colors.b1,
  },
  subtitleStyle: {
    fontFamily: family.OpenSans_Regular,
    fontSize: size.tiny,
    color: colors.g5,
  },
  subtitleBoldStyle: {
    fontFamily: family.OpenSans_Bold,
    fontSize: size.tiny,
    color: colors.p1,
  },
  coloredSubTitle: {
    fontFamily: family.OpenSans_Bold,
    fontSize: size.tiny,
    color: colors.p1,
  },
  valuesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginTop: WP('2'),
  },
  coloredView: {
    backgroundColor: colors.p1,
    padding: WP('3'),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: WP('40'),
  },
  coloredViewTitle: {
    color: colors.white,
    fontSize: size.h6,
    fontFamily: family.OpenSans_SemiBold,
  },
  coloredViewSubtitle: {
    color: colors.white,
    fontSize: size.tiny,
    fontFamily: family.OpenSans_Regular,
  },
  coloredViewSimple: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_Regular,
  },
  coloredTitleSimple: {
    color: colors.white,
    fontSize: size.h6,
    fontFamily: family.OpenSans_Regular,
  },
  rightIconStyl: {
    justifyContent: 'center',
    padding: WP('2'),
    borderColor: colors.p1,
    borderRadius: 5,
    borderWidth: 0.3,
    marginRight: WP('2'),
  },
  dividerStyle: {
    borderColor: colors.g8,
    borderWidth: 1,
    marginVertical: 5,
  },
});

export default styles;
