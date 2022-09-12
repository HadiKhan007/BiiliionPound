import {Platform, StatusBar, StyleSheet} from 'react-native';
import {WP, size, family, colors} from '../../../shared/exporter';

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
  headerText: {
    fontSize: size.h6,
    color: colors.b7,
    fontFamily: family.OpenSans_Bold,
  },
  calculationContainer: {
    width: '100%',
    backgroundColor: colors?.white,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 3.84,
    shadowOpacity: 0.1,
    elevation: 5,
    top: 20,
  },
  calculationInnerContainer: {
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconAndTextContainer: {
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
  },
  count: {
    fontSize: size.large,
    fontFamily: family.OpenSans_Bold,
    color: colors?.b1,
    marginTop: 5,
  },
  category: {
    fontSize: size.small,
    fontFamily: family.OpenSans_Light,
    color: '#323232',
  },
  history:{
    color: colors.p1
  }
});

export default styles;
