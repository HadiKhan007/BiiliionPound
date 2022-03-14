import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {appIcons, colors, family, size} from '../../shared/exporter';

export const AppHeader = ({title, subtitle, onPressBtn, icon}) => {
  return (
    <View style={styles.container}>
      {onPressBtn && (
        <TouchableOpacity onPress={onPressBtn} style={styles.buttonStyle}>
          <Image style={styles.imageStyle} source={icon} />
        </TouchableOpacity>
      )}
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.subtitleStyle}>{subtitle}</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: size.normal,
    color: colors.b7,
    fontFamily: family.Poppins_Bold,
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
