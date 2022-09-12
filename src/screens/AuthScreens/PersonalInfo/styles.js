import {Platform, StatusBar, StyleSheet} from 'react-native';
import {colors, family, HP, size, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: WP('5'),
  },
  titleStyle: {
    fontSize: size.tiny,
    color: colors.g1,
    fontFamily: family.OpenSans_Regular,
    paddingLeft: WP('6'),
    paddingBottom: 5,
  },
  inputIcon: {
    width: 6,
    height: 10,
    resizeMode: 'contain',
    tintColor: colors.g6,
  },
  dropDownStyle: {
    borderRadius: 25,
    backgroundColor: colors?.g10,
    borderColor: 'transparent',
    paddingHorizontal: WP('5'),
  },
  dropDownItemsContianer: {
    borderTopColor: 'transparent',
    borderColor: colors.g8,
    borderWidth: 1,
  },
  aiEnd: {
    position: 'absolute',
    bottom: 40,
    right: 15,
    alignItems: 'flex-end',
  },
  inputStyle: {
    width: '45%',
    height: 50,
    backgroundColor: colors.g10,
    borderRadius: 25,
    paddingHorizontal: WP('3.5'),
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
