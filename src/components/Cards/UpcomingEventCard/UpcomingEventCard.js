import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  appIcons,
  appImages,
  colors,
  family,
  profile_uri,
  size,
  spacing,
  WP,
} from '../../../shared/exporter';
import {Image} from 'react-native-elements';
import moment from 'moment';
import {SmallLoader} from '../..';
export const UpcomingEventCard = ({onPressCard, upcoming_event_item}) => {
  return (
    <View style={spacing.mx1}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={onPressCard}>
        <View style={styles.leftContainer}>
          <View style={styles.imageContainer}>
            <Image
              progressiveRenderingEnabled={true}
              source={{
                uri: upcoming_event_item?.event_image_url,
              }}
              style={styles.imageStyle}
            />
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>
            {moment(new Date()).format('ddd, MMM DD')} •{' '}
            {moment(new Date()).format('hh:mm A')}
          </Text>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Text numberOfLines={2} style={styles.subtitle}>
              {upcoming_event_item?.title}
            </Text>
            <Text style={styles.priceStyle}>
              ${upcoming_event_item?.price}{' '}
            </Text>
          </View>
          <View style={styles.itemStyle}>
            <View style={styles.textAlignment}>
              <Image source={appIcons.location} style={styles.locationStyle} />
              <Text style={styles.textStyle}>Your Favorite Gym`</Text>
            </View>
            <TouchableOpacity style={styles.btnContainer}>
              <Text style={styles.btnText}>{upcoming_event_item?.status}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

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
  },
  leftContainer: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    width: '70%',
    height: '100%',
  },
  imageContainer: {
    backgroundColor: colors.p5,
    height: 92,
    width: 80,
    borderRadius: 15,
    padding: 5,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: size.tiny,
    fontFamily: family.OpenSans_Regular,
    color: colors.p1,
    marginTop: 5,
  },
  subtitle: {
    fontSize: size.normal,
    fontFamily: family.OpenSans_SemiBold,
    color: colors.b10,
    width: '70%',
    marginTop: 5,
  },
  priceStyle: {
    fontFamily: family.OpenSans_SemiBold,
    fontSize: size.xsmall,
    color: colors.g13,
    marginHorizontal: 10,
  },
  locationStyle: {
    height: 15,
    width: 12,
    resizeMode: 'contain',
    marginRight: 5,
  },
  textStyle: {
    fontSize: size.tiny,
    color: colors.g7,
    fontFamily: family.OpenSans_SemiBold,
  },
  btnContainer: {
    backgroundColor: colors.gr1,
    height: 22,
    width: 60,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: colors.white,
    fontSize: size.tiny,
    fontFamily: family.OpenSans_SemiBold,
  },
  textAlignment: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  itemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
});
