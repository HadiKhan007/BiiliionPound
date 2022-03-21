import {Platform, StatusBar, StyleSheet} from 'react-native';
import {HP, WP, size, family, colors, scrHeight} from '../../shared/exporter';

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
});

export default styles;
