import {StyleSheet} from 'react-native';
import {colors, family} from '../../shared/exporter';

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
  buttonUperContainer: {
    width: 55,
    height: 55,
    backgroundColor: 'transparent',
    borderRadius: 55 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.p1,
    zIndex: 1,
    position: 'absolute',
  },
  buttonOuterContainer: {
    width: 55,
    height: 55,
    backgroundColor: 'transparent',
    // borderRadius: 55 / 2,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
    // borderWidth: 2,
    // borderColor: colors.p6,
  },
  buttonCircle: {
    width: 45,
    height: 45,
    backgroundColor: colors.p1,
    borderRadius: 45 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    //  borderWidth: 1,
  },
  dotStyle: {
    backgroundColor: 'transparent',
  },
});

export default styles;
