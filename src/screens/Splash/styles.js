import {Platform, StyleSheet} from 'react-native';
import {colors, HP, WP} from '../../shared/exporter';

const platformOrientedCode = (androidVal, iOSVal) =>
  Platform.select({android: androidVal, ios: iOSVal});

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  imageStyles: {
    width: WP('100%'),
    height: platformOrientedCode(HP('15%'), HP('12%')),
  },
});

export default styles;
