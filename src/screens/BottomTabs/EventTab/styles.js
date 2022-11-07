import {Platform, StatusBar, StyleSheet} from 'react-native';
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  contentContainer: {
    marginHorizontal: WP('5'),
    flex: 1,
  },
  itemConatiner: {
    flex: 1,
  },
  journalDetail: {
    fontSize: size.tiny,
    fontFamily: family.Poppins_Medium,
    color: colors.gr1,
    textAlign: 'justify',
    marginBottom: '5%',
  },
});

export default styles;
