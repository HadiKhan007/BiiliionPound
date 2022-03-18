import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {appIcons, appRadius, colors} from '../../../shared/exporter';

export const ActivityCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View
        style={{
          backgroundColor: 'green',
          width: '65%',
          justifyContent: 'center',
        }}>
        <Text>John Doe</Text>
        <Text>Front Raises</Text>
        <Text>Shoulder</Text>
        <View>
          <Image source={appIcons.weight} style={styles.icon24} />
          <Text>150LBS</Text>
        </View>
        <Text>Exercise</Text>
        <Text>2x Front Raises</Text>
      </View>
      <View
        style={{
          backgroundColor: 'red',
          width: '35%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 170,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: appRadius.boxRadius,
    shadowColor: colors.light_shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  icon24: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
});
