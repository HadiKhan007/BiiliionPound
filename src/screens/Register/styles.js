import {StyleSheet} from 'react-native';
import {HP, WP} from '../../shared/exporter';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  welcomeTextContainer: {
    alignItems: 'center',
    marginVertical: HP('3'),
  },
  inputContainer: {
    marginHorizontal: WP('5'),
  },
});

export default styles;
