import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../../shared/exporter';
import {Image} from 'react-native-elements';

export const EventCard = ({icon, date, title}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardLeftContainer}>
        <Image source={icon} style={styles.icon24} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        {date ? <Text style={styles.subtitleStyle}>{date}</Text> : false}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    height: 40,
    borderRadius: 5,
  },
  cardLeftContainer: {
    width: '12%',
    backgroundColor: colors.p5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  icon24: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    tintColor: colors.p1,
  },
  rightContainer: {
    width: '88%',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  rightContainer: {
    width: '88%',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    fontFamily: family.OpenSans_SemiBold,
    fontSize: size.xsmall,
    color: colors.b1,
  },
  subtitleStyle: {
    fontFamily: family.OpenSans_Regular,
    fontSize: size.tiny,
    color: colors.g5,
  },
});
