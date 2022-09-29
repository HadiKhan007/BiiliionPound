import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  colors,
  family,
  HP,
  setDigitSize,
  size,
  WP,
} from '../../shared/exporter';
import LinearGradient from 'react-native-linear-gradient';
import {SmallLoader} from '..';

export const HomeCircle = ({
  title,
  subtitle,
  icon,
  onPressAdd,
  isLoading,
  disabled,
}) => {
  return (
    <View style={styles.aiCenter}>
      <View style={styles.circleContainer}>
        {!isLoading ? (
          <>
            <Text
              style={[
                styles.title,
                {
                  fontSize: setDigitSize(title),
                },
              ]}
              numberOfLines={1}>
              {title?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </>
        ) : (
          <SmallLoader size={30} />
        )}
      </View>
      {icon && (
        <LinearGradient colors={colors.t_gradient} style={styles.btnContainer}>
          <TouchableOpacity
            disabled={disabled}
            style={[
              styles.btnContainer,
              {backgroundColor: disabled ? colors?.lightGrey : colors?.p1},
            ]}
            onPress={onPressAdd}>
            <Text style={styles.buttonTxtStyle}>Exercise Library</Text>
            {/* <Image source={icon} style={styles.btnImage} /> */}
          </TouchableOpacity>
        </LinearGradient>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: WP('70'),
    width: WP('70'),
    borderRadius: WP('70'),
    borderWidth: 2,
    borderColor: colors.p1,
    marginBottom: WP('5'),
  },
  title: {
    color: colors.b1,
    fontSize: WP('14'),
    fontFamily: family.OpenSans_Medium,
    textAlign: 'center',
  },
  subtitle: {
    top: 5,
    fontFamily: family.OpenSans_Regular,
    color: colors.g1,
    fontSize: size.normal,
    textAlign: 'center',
  },
  btnContainer: {
    marginVertical: WP('3'),
    backgroundColor: colors.p1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: WP('60'),
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: colors.shadowColor,
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
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
    color: colors.white,
    fontSize: size.large,
    fontFamily: family.Poppins_Medium,
  },
});
