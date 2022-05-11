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
  infoTxtStyle: {
    marginBottom: 2,
    color: colors.g3,
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_SemiBold,
  },
  itemContainer: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: colors.white,
    // paddingVertical: 5,
    paddingHorizontal: WP('5.5'),
  },
  sectionHeaderText: {
    fontSize: size.medium,
    fontFamily: family.OpenSans_SemiBold,
    color: colors.b7,
  },
  sectionlistStyle: {
    flex: 1,
    marginHorizontal: -WP('5'),
    paddingBottom: 20,
  },
  selectionBtn: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  flatlistWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default styles;
