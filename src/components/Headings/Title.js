import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../shared/exporter';

export const Title = ({title, color, isLeft}) => {
  return (
    <View style={isLeft ? styles.Container : styles.headingContainer}>
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
  Container: {
    alignItems: 'flex-start',
    marginVertical: WP('2'),
  },
});
