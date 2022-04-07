import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {appImages, colors, WP} from '../../../shared/exporter';

export const FitnessCard = ({icon}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={icon} resizeMode={'contain'} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 72,
    height: 72,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 10,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 56,
    height: 56,
    padding: WP('5'),
    borderRadius: 10,
  },
});
