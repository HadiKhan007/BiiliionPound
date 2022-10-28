import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  appIcons,
  colors,
  family,
  size,
  spacing,
  WP,
} from '../../../shared/exporter';

const ActivityHistoryCard = ({item, onPressCard}) => {
  return (
    <View style={spacing.mx1}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={onPressCard}>
        <View style={styles.leftContainer}>
          <Text style={styles.userName}>{item?.name}</Text>
          <View style={styles.titleContianer}>
            <Text style={styles.title}>{'Steps'}</Text>
            <Text style={styles.stepsCount}>{item?.steps}</Text>
            <Text style={[styles.stepsCount, {marginTop: 5}]}>
              {`Cover Distance\t\t${item?.coverDistance}`}
            </Text>
          </View>
        </View>

        <View style={styles.rightContainer}>
          <View style={styles.imageContainer}>
            <Image
              progressiveRenderingEnabled={true}
              source={appIcons.steps}
              style={[styles.imageStyle]}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ActivityHistoryCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: WP('30'),
    width: '100%',
    backgroundColor: colors.white,
    borderColor: colors.light_shadow,
    borderRadius: 15,
    shadowColor: colors.light_shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
    marginVertical: 10,
    paddingVertical: 5,
  },
  rightContainer: {
    width: '35%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer: {
    width: '65%',
    height: '100%',
    left: 15,
  },
  imageContainer: {
    backgroundColor: colors.white,
    height: 100,
    width: 100,
    borderRadius: 15,
    padding: 5,
    shadowColor: colors.light_shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 6,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  userName: {
    fontSize: size.large,
    fontFamily: family.OpenSans_Medium,
    color: colors.p1,
    marginTop: 10,
  },
  title: {
    fontSize: size.normal,
    fontFamily: family.OpenSans_SemiBold,
    color: colors.b10,
  },
  titleContianer: {
    height: 50,
    marginTop: '3%',
  },
  stepsCount: {
    fontSize: size.small,
    fontFamily: family.OpenSans_Regular,
    color: colors.g1,
  },
});
