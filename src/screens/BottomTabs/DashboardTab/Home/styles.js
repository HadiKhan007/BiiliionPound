import {Platform, StatusBar, StyleSheet} from 'react-native';
import {
  HP,
  WP,
  size,
  family,
  colors,
  scrHeight,
} from '../../../../shared/exporter';

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
  itemView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAlign: {
    backgroundColor: colors.p1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: WP('60'),
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: colors.shadowColor,
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  btnText: {
    color: colors?.white,
    fontFamily: family?.Poppins_Medium,
    fontSize: size.large,
  },
});

export default styles;
