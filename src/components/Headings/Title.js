import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../shared/exporter';

export const Title = ({title, color}) => {
  return (
    <View style={styles.headingContainer}>
      <Text style={[styles.titleStyle, {color: color ? color : colors.b7}]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: size.normal,
    color: colors.b7,
    fontFamily: family.OpenSans_SemiBold,
  },
});
