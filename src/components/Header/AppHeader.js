import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {colors, family, scrWidth, size} from '../../shared/exporter';
import {useNavigation} from '@react-navigation/core';

export const AppHeader = ({
  title,
  subtitle,
  icon,
  onPressBack,
  secondaryIcon,
  rightIcon,
  onPressBtn,
  smSubtitle,
  titleColor,
  paddingHorizontal,
  disabled,
  rightContainerWidth,
  centerContainerWidth,
  marginTop,
  marginLeft,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: paddingHorizontal ? paddingHorizontal : 0,
          marginTop: marginTop ? marginTop : 0,
          marginLeft: marginLeft ? marginLeft : 0,
          // backgroundColor: 'red',
        },
      ]}>
      <View style={styles.headerStyle}>
        <View style={styles.leftContainer}>
          {icon && (
            <TouchableOpacity
              onPress={onPressBack ? onPressBack : () => navigation?.goBack()}
              style={styles.buttonStyle}>
              <Image style={styles.imageStyle} source={icon} />
            </TouchableOpacity>
          )}
          {secondaryIcon && (
            <TouchableOpacity
              onPress={onPressBack ? onPressBack : () => navigation?.goBack()}
              style={styles.buttonStyle}>
              <Image style={styles.icon24} source={secondaryIcon} />
            </TouchableOpacity>
          )}
        </View>
        <Text
          style={[
            styles.titleStyle,
            {
              color: titleColor ? titleColor : colors.b7,
              width: centerContainerWidth
                ? centerContainerWidth
                : scrWidth / 1.7,
            },
          ]}>
          {title}
        </Text>
        <TouchableOpacity
          style={[
            styles.rightContainer,
            {
              width: rightContainerWidth ? rightContainerWidth : scrWidth / 6,
            },
          ]}
          disabled={disabled}
          onPress={onPressBtn}>
          {subtitle && (
            <Text
              style={[
                styles.subtitleStyle,
                {color: disabled ? colors.p5 : colors.p1},
              ]}>
              {subtitle}
            </Text>
          )}
          {smSubtitle && (
            <Text style={styles.smSubtitleStyle}>{smSubtitle}</Text>
          )}

          {rightIcon && (
            <Image style={styles.rightIconStyle} source={rightIcon} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
AppHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.any,
  onPressBtn: PropTypes.func,
};
const styles = StyleSheet.create({
  container: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: size.normal,
    color: colors.b7,
    fontFamily: family.Poppins_Bold,
    textAlign: 'center',
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  subtitleStyle: {
    fontSize: size.normal,
    color: colors.p1,
    fontFamily: family.Poppins_Medium,
  },
  smSubtitleStyle: {
    fontSize: size.tiny,
    color: colors.p1,
    fontFamily: family.Poppins_Medium,
  },
  buttonStyle: {
    height: 32,
    width: 32,
    backgroundColor: colors.g10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 10,
    width: 6,
    resizeMode: 'contain',
  },
  icon24: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  rightIconStyle: {
    width: 18,
    height: 20,
    resizeMode: 'contain',
  },
  leftContainer: {
    width: scrWidth / 7,
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
