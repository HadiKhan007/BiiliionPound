import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';
import {SmallLoader} from '..';

export const StepsCircle = ({
  title,
  subtitle,
  onPressEnd,
  isLoading,
  onPressPlayPause,
  playPauseStatus,
}) => {
  return (
    <View style={styles.aiCenter}>
      <View style={styles.circleContainer}>
        {!isLoading ? (
          <>
            <Text style={[styles.title]} numberOfLines={1}>
              {title?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.btnContainer}
              onPress={onPressEnd}>
              <Text style={styles.buttonTxtStyle}>{`End Workout`}</Text>
            </TouchableOpacity>
          </>
        ) : (
          <SmallLoader size={30} />
        )}
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.playPauseBtnContainer}
        onPress={onPressPlayPause}>
        <Image
          source={playPauseStatus ? appIcons?.play : appIcons?.pause}
          style={styles?.btnImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    height: WP('90'),
    width: WP('90'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WP('70'),
    borderWidth: 2,
    borderColor: colors.p1,
    marginVertical: '10%',
  },
  title: {
    color: colors.b1,
    fontFamily: family.OpenSans_Medium,
    textAlign: 'center',
    fontSize: size?.huge,
  },
  subtitle: {
    top: 5,
    fontFamily: family.OpenSans_Regular,
    color: colors.g1,
    fontSize: size.normal,
    textAlign: 'center',
  },
  btnContainer: {
    backgroundColor: colors?.white,
    top: 30,
    width: WP('30'),
    borderColor: colors?.r2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: colors.shadowColor,
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  playPauseBtnContainer: {
    height: WP('20'),
    width: WP('20'),
    backgroundColor: colors?.p1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '15%',
  },
  btnImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  aiCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTxtStyle: {
    fontSize: size.xxsmall,
    fontFamily: family.OpenSans_SemiBold,
    color: colors.red,
  },
});
