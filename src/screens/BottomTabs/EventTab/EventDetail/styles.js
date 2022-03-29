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
    backgroundColor: colors.p1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  firstConatiner: {
    height: '20%',
    backgroundColor: colors.p1,
    zIndex: 9999,
  },
  contentContainer: {
    marginHorizontal: WP('5'),
    flex: 1,
  },
  itemConatiner: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: -WP('5'),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  headerContainer: {
    height: 60,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: '#5A5A5A',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: -30,
  },
  countStyle: {
    fontSize: size.xsmall,
    color: colors.p1,
    fontFamily: family.OpenSans_SemiBold,
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  titleStyle: {
    fontSize: size.xxlarge,
    color: colors.b1,
    fontFamily: family.OpenSans_SemiBold,
    marginBottom: 10,
  },
  btnContainer: {
    backgroundColor: colors.white,
    height: 50,
    borderWidth: 1,
    borderColor: colors.p1,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  btnText: {
    fontSize: size.normal,
    fontFamily: family.OpenSans_SemiBold,
    color: colors.b1,
  },
  inputIcon: {
    width: 7,
    height: 16,
    resizeMode: 'contain',
    tintColor: colors.b1,
  },
  description: {
    fontSize: size.xsmall,
    color: colors.b10,
    fontFamily: family.OpenSans_Regular,
  },
  readMoreStyle: {
    color: colors.p1,
    fontFamily: family.OpenSans_Regular,
    fontSize: size.xsmall,
  },
  unreadStyle: {
    color: colors.p1,
    fontFamily: family.OpenSans_Regular,
    fontSize: size.xsmall,
    marginBottom: 10,
  },
  btnAlign: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  eventInfo: {
    marginTop: 30,
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
  },
});

export default styles;
