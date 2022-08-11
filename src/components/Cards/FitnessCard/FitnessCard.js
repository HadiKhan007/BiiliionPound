import React, {memo} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {appImages, colors, WP} from '../../../shared/exporter';
import {Image} from 'react-native-elements';

const FitnessCardComponent = ({icon}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={icon}
        resizeMode={icon?.uri ? 'cover' : 'contain'}
        style={styles.image}
        PlaceholderContent={
          <ActivityIndicator
            style={{backgroundColor: 'transparent'}}
            color={colors.p}
          />
        }
      />

      {/* <Image
        source={icon}
        resizeMode={icon?.uri ? 'cover' : 'contain'}
        style={styles.image}
      /> */}
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

const FitnessCard = memo(FitnessCardComponent);

export {FitnessCard};
