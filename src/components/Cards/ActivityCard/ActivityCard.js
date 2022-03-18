import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  appIcons,
  appRadius,
  capitalizeFirstLetter,
  colors,
  family,
  size,
  spacing,
} from '../../../shared/exporter';
import {FitnessCard} from '../FitnessCard/FitnessCard';

export const ActivityCard = ({
  cardIcon,
  name,
  mode,
  type,
  weight,
  excercise,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{capitalizeFirstLetter(name)}</Text>
        <Text style={styles.title}>{mode}</Text>
        <Text style={styles.subtitle}>{type}</Text>
        <View style={styles.textConatiner}>
          <Image source={appIcons.weight} style={styles.icon24} />
          <Text style={styles.subtitle}>{weight}</Text>
        </View>
        <Text style={styles.type}>Exercise</Text>
        <Text style={styles.subtitle}>{excercise}</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={spacing.pt3}>
          <FitnessCard icon={cardIcon} />
        </View>
        <Text style={styles.subtitle}>(+2LBS) x 10</Text>
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
    borderWidth: 0.5,
    borderColor: colors.light_shadow,
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
  textConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  icon24: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginHorizontal: 3,
  },
  name: {
    fontFamily: family.OpenSans_SemiBold,
    fontSize: size.normal,
    color: colors.p1,
  },
  title: {
    fontFamily: family.OpenSans_SemiBold,
    fontSize: size.normal,
    color: colors.b7,
    marginVertical: 3,
  },
  leftContainer: {
    width: '65%',
    justifyContent: 'center',
  },
  rightContainer: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  subtitle: {
    fontSize: size.xsmall,
    color: colors.g1,
    fontFamily: family.OpenSans_Regular,
  },
  type: {
    fontSize: size.normal,
    fontFamily: family.OpenSans_SemiBold,
    color: colors.b7,
    marginVertical: 3,
  },
});
