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
  itemView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculationContainer: {
    width: '98%',
    alignSelf: 'center',
    backgroundColor: colors?.white,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 3.84,
    shadowOpacity: 0.1,
    elevation: 5,
    bottom: 40,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
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
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_Bold,
    color: colors?.b1,
    marginTop: 5,
  },
  category: {
    fontSize: size.xxtiny,
    fontFamily: family.OpenSans_Light,
    color: '#323232',
  },
  titleStyle: {
    fontSize: size.tiny,
    color: colors.g1,
    fontFamily: family.OpenSans_Regular,
    paddingLeft: WP('6'),
    paddingBottom: 5,
  },
  dropDownStyle: {
    borderRadius: 25,
    backgroundColor: colors?.g10,
    borderColor: 'transparent',
    paddingHorizontal: WP('5'),
    height: 45,
  },
  dropDownItemsContianer: {
    backgroundColor: 'red',
    borderColor: colors.g8,
    borderWidth: 1,
    fontSize: size.xsmall,
    color: colors.b1,
    fontFamily: family.OpenSans_Regular,
  },
  placeholder: {
    fontSize: size.xsmall,
    color: colors.g1,
    fontFamily: family.OpenSans_Regular,
  },
  selectedTextStyle: {
    fontFamily: family.Poppins_Regular,
    color: colors?.b1,
    fontSize: size.small,
  },
});

export default styles;
