import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {colors, family, size} from '../../shared/exporter';
import {useNavigation} from '@react-navigation/core';

export const AppHeader = ({title, subtitle, icon}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        {icon && (
          <TouchableOpacity
            onPress={() => {
              navigation?.goBack();
            }}
            style={styles.buttonStyle}>
            <Image style={styles.imageStyle} source={icon} />
          </TouchableOpacity>
        )}
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.subtitleStyle}>{subtitle}</Text>
      </View>
    </View>
  );
};
AppHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
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
    right: 10,
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
});
