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
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  contentContainer: {
    marginHorizontal: WP('5'),
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.g12,
    marginHorizontal: -WP('5'),
  },
  imageConatiner: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  policyImageStyle: {
    width: 18,
    height: 20,
    resizeMode: 'contain',
  },
  TermsImageStyle: {
    height: 20,
    width: 16,
    resizeMode: 'contain',
  },
  faqsImageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  logoutImageStyle: {
    height: 17,
    width: 16,
    resizeMode: 'contain',
  },
});

export default styles;
