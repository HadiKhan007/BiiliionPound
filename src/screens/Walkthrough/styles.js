import {StyleSheet} from 'react-native';
import {family} from '../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '500',
    fontFamily: family.OpenSans_ExtraBold,
  },
});

export default styles;
