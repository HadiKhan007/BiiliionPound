import {Platform, StatusBar, StyleSheet} from 'react-native';
import {WP, size, family, colors} from '../../../shared/exporter';

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
  headerText: {
    fontSize: size.h6,
    color: colors.b7,
    fontFamily: family.OpenSans_Bold,
  },
  btnContainer: {
    marginVertical: WP('3'),
    backgroundColor: colors.p1,
    alignItems: 'center',
    padding: WP('5'),
    // height: WP('70'),
    width: WP('90'),
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: colors.shadowColor,
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    fontSize: size.xlarge,
    color: colors.white,
    fontFamily: family.OpenSans_Bold,
    textAlign: 'center',
  },
  description: {
    fontSize: size.large,
    color: colors.white,
    fontFamily: family.OpenSans_Medium,
    textAlign: 'center',
    marginTop: '2%',
  },
  modeBtn: {
    width: WP('40'),
    height: WP('10'),
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
});

export default styles;
