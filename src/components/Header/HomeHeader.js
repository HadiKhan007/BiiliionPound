import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {appIcons, colors, family, size} from '../../shared/exporter';

export const HomeHeader = ({title, subtitle, icon, onPressBtn}) => {
  return (
    <View style={styles.container}>
      <View style={styles.aiCenter}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.subtitleStyle}>{subtitle}</Text>
      </View>
      {onPressBtn && (
        <TouchableOpacity onPress={onPressBtn} style={styles.aiCenter}>
          <Image source={icon} style={styles.icon24} />
        </TouchableOpacity>
      )}
    </View>
  );
};
HomeHeader.propTypes = {
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
    paddingVertical: 10,
  },
  titleStyle: {
    fontSize: size.tiny,
    color: colors.g2,
    marginBottom: 5,
    fontFamily: family.OpenSans_Regular,
  },
  subtitleStyle: {
    fontSize: size.h6,
    color: colors.b7,
    fontFamily: family.OpenSans_Bold,
  },
  leftContainer: {
    width: '80%',
  },
  aiCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon24: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
});
