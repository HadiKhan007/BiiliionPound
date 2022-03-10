import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {family, HP} from '../../shared/exporter';

export const WelcomeBox = ({title, subtitle}) => {
  return (
    <View style={styles.welcomeTextContainer}>
      <Text style={styles.welcomeTitleStyle}>{title}</Text>
      <Text style={styles.welcomeSubtitleStyle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeTextContainer: {
    alignItems: 'center',
    marginVertical: HP('3'),
  },
  welcomeTitleStyle: {
    fontFamily: family.OpenSans_Regular,
    fontSize: 15,
  },
  welcomeSubtitleStyle: {
    fontFamily: family.OpenSans_Bold,
    fontSize: 20,
  },
});
