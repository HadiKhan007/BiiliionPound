import {Platform, StyleSheet} from 'react-native';
import {
  colors,
  HP,
  WP,
  platformOrientedCode,
  size,
  family,
} from '../../shared/exporter';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageStyles: {
    width: WP('100%'),
    height: platformOrientedCode(HP('12%'), HP('10%')),
  },
  iconStyle: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginTop: '15%',
    alignSelf: 'flex-end',
    margin: 20,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
  },
  subscriptionTitle: {
    width: '70%',
    padding: 15,
    backgroundColor: colors.p1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: size.medium,
    fontFamily: family.Poppins_Medium,
    color: colors.white,
    top: 2,
  },
  subDetail: {
    fontSize: size.small,
    fontFamily: family.Poppins_Medium,
    color: colors.b1,
    textAlign: 'center',
    lineHeight: 25,
    marginTop: '5%',
  },
  nextBillingTilte: {
    fontSize: size.large,
    fontFamily: family.OpenSans_Bold,
    color: colors.b1,
    textAlign: 'center',
    marginTop: '5%',
  },
  nextBillingDate: {
    fontSize: size.small,
    fontFamily: family.OpenSans_Medium,
    color: colors.b1,
    textAlign: 'center',
    marginTop: '5%',
  },
  journalDetail: {
    fontSize: size.xxsmall,
    fontFamily: family.Poppins_Medium,
    color: colors.b1,
    textAlign: 'center',
    marginTop: '5%',
    textTransform: 'uppercase',
  },
  btnAlign: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  termsOfUse: {
    fontSize: size.xsmall,
    fontFamily: family.Poppins_Medium,
    color: colors.p1,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    marginBottom: '3%',
  },
  descText: {
    width: '80%',
  },
  joinSubs: {
    fontSize: size.small,
    fontFamily: family.OpenSans_Medium,
    color: colors.b1,
  },
});

export default styles;
