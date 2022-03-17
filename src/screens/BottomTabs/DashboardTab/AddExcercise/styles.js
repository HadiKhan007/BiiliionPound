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
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  contentContainer: {
    marginHorizontal: WP('5'),
    flex: 1,
  },
  itemContainer: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingLeft: 10,
  },
  sectionHeaderText: {
    fontSize: size.large,
    fontFamily: family.OpenSans_SemiBold,
    color: colors.b7,
  },
  sectionlistStyle: {flex: 1, marginHorizontal: 5},
  flatListStyle: {
    flex: 0.5,
  },
});

export default styles;
