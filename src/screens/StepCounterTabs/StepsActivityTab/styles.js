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
  progressbarContainer: {
    width: '98%',
    alignSelf: 'center',
    padding: 15,
    backgroundColor: colors?.white,
    marginTop: '3%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 3.84,
    shadowOpacity: 0.1,
    elevation: 5,
  },
  totalSteps: {
    fontSize: size.large,
    color: colors.b1,
    fontFamily: family.OpenSans_Bold,
  },
  remainingSteps: {
    fontSize: size.xxsmall,
    color: colors.b1,
    fontFamily: family.OpenSans_Bold,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    backgroundColor: colors.p7,
    marginTop: '5%',
    borderColor: colors.white,
    borderWidth: 1,
  },
  barContainer: {
    backgroundColor: colors.white,
    marginTop: '10%',
    // borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 3.84,
    shadowOpacity: 0.1,
    elevation: 5,
  },
});

export default styles;
