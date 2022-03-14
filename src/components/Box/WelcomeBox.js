import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, HP, size, WP} from '../../shared/exporter';

export const WelcomeBox = ({
  title,
  subtitle,
  normalText,
  paddingHorizontal,
}) => {
  return (
    <View style={styles.welcomeTextContainer}>
      <Text style={styles.welcomeTitleStyle}>{title}</Text>
      <Text style={styles.welcomeSubtitleStyle}>{subtitle}</Text>
      <Text
        style={[
          styles.welcomeNormalText,
          {
            paddingHorizontal: paddingHorizontal,
          },
        ]}>
        {normalText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeTextContainer: {
    alignItems: 'center',
    marginTop: HP('1'),
  },
  welcomeTitleStyle: {
    fontFamily: family.OpenSans_Regular,
    fontSize: 15,
  },
  welcomeSubtitleStyle: {
    fontFamily: family.OpenSans_Bold,
    fontSize: 20,
  },
  welcomeNormalText: {
    fontFamily: family.OpenSans_Regular,
    fontSize: size.tiny,
    color: colors.g1,
    marginTop: HP('2'),
    textAlign: 'center',
  },
});
