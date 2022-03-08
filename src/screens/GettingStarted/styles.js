import {Dimensions, StyleSheet} from 'react-native';
import {HP, platformOrientedCode, WP} from '../../shared/exporter';

const styles = StyleSheet.create({
  main: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  logo: {
    width: WP('100%'),
    height: platformOrientedCode(HP('15%'), HP('14%')),
  },
  buttonContainer: {
    position: 'absolute',
    bottom: HP('7'),
    width: '100%',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
