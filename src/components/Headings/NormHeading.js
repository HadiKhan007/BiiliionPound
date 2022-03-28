import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../shared/exporter';

export const NormHeading = ({title, subtitle, family}) => {
  return (
    <View style={styles.aiCenter}>
      <Text style={[styles.h1, {fontFamily: family}]}>{title}</Text>
      <Text style={[styles.h1, {fontFamily: family}]}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aiCenter: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5,
  },
  h1: {
    fontSize: size.xsmall,
    color: colors.b7,
  },
});
