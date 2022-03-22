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

  contentContainer: {
    marginHorizontal: WP('5'),
    flex: 1,
  },
  itemContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.p1,
    marginHorizontal: -WP('5'),
  },
  itemContainer2: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: -WP('5'),
  },
  inputContainer: {
    padding: WP('5'),
    marginVertical: WP('5'),
  },
  aiCenter: {
    marginTop: WP('10'),
    alignItems: 'center',
  },
});

export default styles;
