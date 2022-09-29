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
  separator: {
    borderBottomWidth: 1,
    borderColor: colors.g8,
    marginVertical: 5,
  },
  itemContainer: {
    marginHorizontal: WP('3'),
    flex: 1,
  },
  noNoti: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noNotifications: {
    color: colors?.b1,
    fontFamily: family?.Poppins_Medium,
    fontSize: size.large,
    marginBottom: '5%'
  },
});

export default styles;
