import {Platform, StatusBar, StyleSheet} from 'react-native';
import {WP} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: WP('5'),
  },
  headerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
