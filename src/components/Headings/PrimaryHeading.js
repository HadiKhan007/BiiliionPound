import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../shared/exporter';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const PrimaryHeading = ({
  title,
  subtitle,
  normalText,
  onPressSubtitle,
}) => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      {subtitle && (
        <Text onPress={onPressSubtitle} style={styles.subtitleStyle}>
          {subtitle}
        </Text>
      )}
      {normalText && (
        <View style={styles.aiRow}>
          <Text style={styles.normalTextStyle}>{normalText}</Text>
          <AntDesign name={'caretright'} color={colors.g6} size={9} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleStyle: {
    fontSize: size.large,
    color: colors.b7,
    fontFamily: family.OpenSans_SemiBold,
  },
  subtitleStyle: {
    color: colors.g1,
    fontSize: size.tiny,
    fontFamily: family.OpenSans_Regular,
  },
  normalTextStyle: {
    color: colors.g6,
    fontFamily: family.OpenSans_Regular,
    fontSize: size.xsmall,
    right: 5,
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
