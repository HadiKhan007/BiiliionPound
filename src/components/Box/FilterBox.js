import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../shared/exporter';

export const FilterBox = ({
  title,
  titleColor,
  borderWidth,
  borderColor,
  backgroundColor,
  onPressItem,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressItem}
      style={[
        styles.container,
        {
          borderWidth: borderWidth,
          borderColor: borderColor,
          backgroundColor: backgroundColor,
        },
      ]}>
      <Text style={[styles.textStyle, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.p7,
    height: 44,
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginHorizontal: 5,
    marginVertical: 10,
    borderColor: colors.p1,
    borderWidth: 1,
  },
  textStyle: {
    fontSize: size.xsmall,
    color: colors.g1,
    fontFamily: family.OpenSans_Regular,
  },
});
