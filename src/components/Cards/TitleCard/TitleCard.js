import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  appIcons,
  appImages,
  appRadius,
  colors,
  family,
  profile_uri,
  size,
  WP,
} from '../../../shared/exporter';
import {Image} from 'react-native-elements';
export const TitleCard = ({onPressCard, title, rightIcon, leftIcon}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPressCard}>
      <View
        style={[
          styles.rightContainer,
          {
            flexDirection: 'row',
          },
        ]}>
        {leftIcon && (
          <Image source={appIcons.rightIcon} style={styles.icon24} />
        )}
        <Text style={styles.title}>{title}</Text>
        {rightIcon && (
          <Image source={appIcons.rightIcon} style={styles.icon24} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: WP('15'),
    backgroundColor: colors.white,
    borderColor: colors.light_shadow,
    borderRadius: 15,
    shadowColor: colors.light_shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
    marginVertical: 10,
    // marginHorizontal: WP('3'),
  },
  leftContainer: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    // width: '70%',
    // height: '100%',
    marginHorizontal: WP('5'),
    justifyContent: 'space-between',
    // backgroundColor: 'green',
    alignItems: 'center',
    width: '90%',
  },
  imageContainer: {
    backgroundColor: colors.p5,
    height: 92,
    width: 80,
    borderRadius: 15,
    padding: 10,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: size.normal,
    fontFamily: family.OpenSans_SemiBold,
    color: colors.p1,
  },
  subtitle: {
    fontSize: size.normal,
    fontFamily: family.OpenSans_SemiBold,
    color: colors.b10,
    // width: '70%',
    // marginTop: 5,
  },
  priceStyle: {
    fontFamily: family.OpenSans_SemiBold,
    fontSize: size.xsmall,
    color: colors.g13,
    marginHorizontal: 10,
  },
  locationStyle: {
    height: 15,
    width: 12,
    resizeMode: 'contain',
    marginRight: 5,
  },
  textStyle: {
    fontSize: size.tiny,
    color: colors.g7,
    fontFamily: family.OpenSans_SemiBold,
  },
  btnContainer: {
    backgroundColor: colors.gr1,
    height: 22,
    width: 60,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: colors.white,
    fontSize: size.tiny,
    fontFamily: family.OpenSans_SemiBold,
  },
  textAlignment: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  itemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  icon24: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    tintColor: colors.p1,
  },
});
