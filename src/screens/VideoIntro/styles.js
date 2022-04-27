import {StyleSheet} from 'react-native';
import {colors, family, HP, size} from '../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
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
    position: 'absolute',
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
    bottom: 40,
    right: 20,

    //  borderWidth: 1,
  },
  dotStyle: {
    backgroundColor: 'transparent',
  },
  title: {
    color: colors.white,
    fontFamily: family.OpenSans_Bold,
    fontSize: size.h6,
  },
  desc: {
    color: colors.white,
    fontFamily: family.OpenSans_SemiBold,
    marginTop: HP('2'),
    fontSize: size.small,
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  textContainer: {
    flex: 0.5,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    marginTop: HP('4'),
  },
});

export default styles;
