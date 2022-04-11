import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  appIcons,
  appImages,
  appRadius,
  capitalizeFirstLetter,
  colors,
  family,
  profile_uri,
  size,
  spacing,
  WP,
} from '../../../shared/exporter';
import {Image} from 'react-native-elements';
import {OngoingItem} from './OngoingItem';
import moment from 'moment';
export const OngoingEventCard = ({
  onPressCard,
  allEvents,
  users_lists,
  event_image,
  title,
  event_date,
  event_status,
  event_price,
}) => {
  return (
    <View style={spacing.mx1}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.container, {width: allEvents ? WP('85') : WP('65')}]}
        onPress={onPressCard}>
        <View
          style={[
            styles.primaryContainer,
            {width: allEvents ? WP('80') : WP('60')},
          ]}>
          <ImageBackground
            style={styles.bgContainer}
            source={
              event_image
                ? {
                    uri: event_image,
                  }
                : appImages.sample_exercise
            }
            imageStyle={styles.imageStyle}>
            <View style={styles.littleBox}>
              <Text style={styles.textStyle1}>
                {moment(event_date).format('DD')}{' '}
              </Text>
              <Text style={styles.textStyle2}>
                {moment(event_date).format('MMM')}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.secondaryContainer}>
          <Text style={styles.titleStyle} numberOfLines={1}>
            {capitalizeFirstLetter(title)}
          </Text>
          <OngoingItem
            title_part={'Going'}
            users_lists={users_lists}
            title={`${users_lists?.length}`}
            titleStyle={[
              styles.countStyle,
              {marginLeft: allEvents ? WP('5') : null},
            ]}
            imageHeight={24}
            imageWidth={24}
            subtitle={`$${event_price}`}
          />
          <View style={styles.itemsStyle}>
            <View style={styles.textAlignment}>
              <Image source={appIcons.location} style={styles.locationStyle} />
              <Text style={styles.textStyle}>Your Favorite Gym</Text>
            </View>
            {allEvents ? null : (
              <>
                {event_status === 'joined' ? (
                  <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btnText}>{event_status}</Text>
                  </TouchableOpacity>
                ) : (
                  false
                )}
              </>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WP('67'),
    width: WP('65'),
    marginVertical: 10,
    padding: 10,
    marginRight: 10,
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
  },
  primaryContainer: {
    width: WP('60'),
    height: WP('35'),
    backgroundColor: colors.p5,
    borderRadius: 15,
    padding: 7,
  },
  bgContainer: {
    height: '100%',
    width: '100%',
  },
  littleBox: {
    height: 50,
    width: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  imageStyle: {
    resizeMode: 'contain',
    borderRadius: 5,
  },
  textStyle1: {
    color: colors.p1,
    textAlign: 'center',
    fontSize: size.large,
    fontFamily: family.OpenSans_Regular,
    width: '100%',
  },
  textStyle2: {
    color: colors.p1,
    textAlign: 'center',
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_Regular,
    width: '100%',
  },
  secondaryContainer: {
    marginVertical: 10,
  },
  titleStyle: {
    fontFamily: family.OpenSans_Regular,
    fontSize: size.large,
    color: colors.b1,
  },
  itemsStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 5,
  },
  smallImageCard: {
    height: 24,
    width: 24,
    borderRadius: 100,
  },
  smallImageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: colors.white,
  },
  countStyle: {
    fontSize: size.tiny,
    color: colors.p1,
    fontFamily: family.OpenSans_SemiBold,
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
});
