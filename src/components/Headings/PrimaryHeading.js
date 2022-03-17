import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../shared/exporter';

export const PrimaryHeading = ({title, subtitle}) => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.subtitleStyle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  titleStyle: {
    fontSize: size.large,
    color: colors.b7,
    fontFamily: family.OpenSans_SemiBold,
  },
  subtitleStyle: {
    color: colors.g1,
    fontSize: size.tiny,
  },
});
