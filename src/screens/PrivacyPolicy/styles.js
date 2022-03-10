import {StyleSheet} from 'react-native';
import {
  HP,
  WP,
  size,
  family,
  colors,
  scrHeight,
} from '../../../shared/exporter';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  contentContainer: {
    marginHorizontal: WP('5'),
  },
});

export default styles;
