import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size, WP} from '../../../shared/exporter';
import {TitleCard} from '../TitleCard/TitleCard';

export const MilitaryPressCard = ({
  title,
  subTitle,
  price,
  liftedAmount,
  onPressCard,
}) => {
  const data = [
    {
      id: 0,
      title: 'Sat,May 25, 2022',
      subtitle: '10:00 AM - 9:00 PM',
      leftIcon: appIcons.calender,
    },
    {
      id: 1,
      title: 'Your Favorite Gym',
      leftIcon: appIcons.badge,
      rightIcon: appIcons.arrow,
    },
    {
      id: 2,
      title: 'Team Red',
      subtitle: 'You are in team red',
      leftIcon: appIcons.peoples,
    },
  ];
  return (
    <View style={{width: '100%'}}>
      <View style={styles.container}>
        <View>
          <Text style={styles.headerStyle}>{title}</Text>
          <Text style={styles.subtitleStyle}>
            Your Amount: <Text style={styles.coloredSubTitle}>{subTitle}</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.rightIconStyle}>
          <Image style={styles.rightIcon} source={appIcons.user} />
        </TouchableOpacity>
      </View>

      <View style={styles.valuesView}>
        <View style={styles.coloredView}>
          <Text style={styles.coloredViewTitle}>
            {liftedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
            <Text style={styles.coloredViewSimple}>lbs</Text>
          </Text>
          <Text style={styles.coloredViewSubtitle}>Total Lifted Amount</Text>
        </View>

        <View
          style={[
            styles.coloredView,
            {flexDirection: 'row', justifyContent: 'space-evenly'},
          ]}>
          <Image
            source={appIcons.priceTag}
            style={[styles.icon24, {tintColor: colors.white}]}
          />
          <Text style={styles.coloredTitleSimple}>
            ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
        </View>
      </View>
      <TitleCard title={'View Activity'} rightIcon onPressCard={onPressCard} />

      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.cardContainer}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.cardLeftContainer}>
                  <Image source={item.leftIcon} style={styles.icon24} />
                </View>
                <View style={styles.rightContainer}>
                  <Text style={styles.titleStyle}>{item?.title}</Text>
                  {item.subtitle && (
                    <Text style={styles.subtitleStyle}>{item?.subtitle}</Text>
                  )}
                </View>
              </View>
              {item.rightIcon && (
                <View style={styles.rightIconStyl}>
                  <Image source={item.rightIcon} style={styles.icon24} />
                </View>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerStyle: {
    fontSize: size.normal,
    color: colors.b7,
    fontFamily: family.OpenSans_SemiBold,
  },
  rightIconStyle: {
    backgroundColor: colors.gr1,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  rightIcon: {
    height: 34,
    width: 34,
    resizeMode: 'contain',
  },
  cardContainer: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    height: 40,
  },
  cardLeftContainer: {
    width: '12%',
    backgroundColor: colors.p5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon24: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    tintColor: colors.p1,
  },
  rightContainer: {
    width: '70%',
    marginLeft: 10,
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
  coloredSubTitle: {
    fontFamily: family.OpenSans_Bold,
    fontSize: size.tiny,
    color: colors.p1,
  },
  valuesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: WP('2'),
  },
  coloredView: {
    backgroundColor: colors.p1,
    padding: WP('3'),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: WP('43'),
  },
  coloredViewTitle: {
    color: colors.white,
    fontSize: size.h6,
    fontFamily: family.OpenSans_SemiBold,
  },
  coloredViewSubtitle: {
    color: colors.white,
    fontSize: size.tiny,
    fontFamily: family.OpenSans_Regular,
  },
  coloredViewSimple: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.OpenSans_Regular,
  },
  coloredTitleSimple: {
    color: colors.white,
    fontSize: size.h6,
    fontFamily: family.OpenSans_Regular,
  },
  rightIconStyl: {
    justifyContent: 'center',
    padding: WP('2'),
    borderColor: colors.p1,
    borderRadius: 5,
    borderWidth: 0.3,
    marginRight: WP('2'),
  },
});
