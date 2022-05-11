import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {appIcons, colors, family, HP, size, WP} from '../../shared/exporter';

const Tab = ({index, title}) => {
  return (
    <View style={styles.tabContainer}>
      <View style={[styles.borderStyle, {borderTopWidth: index == 0 ? 4 : 0}]}>
        <TouchableOpacity style={styles.aicenter}>
          <Image
            source={appIcons.home}
            style={[
              styles.homeImageStyle,
              {
                tintColor: index == 0 ? colors.p1 : colors.g1,
              },
            ]}
          />
          <Text
            style={[
              styles.textStyle,
              {
                color: index === 0 ? colors.p1 : colors.g1,
              },
            ]}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: HP('10'),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeImageStyle: {
    height: 16,
    width: 18,
    resizeMode: 'contain',
  },

  activityImageStyle: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  eventImageStyle: {
    height: 20,
    width: 16,
    resizeMode: 'contain',
  },
  profileImageStyle: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
  },

  textStyle: {
    fontSize: size.tiny,
    fontFamily: family.OpenSans_Regular,
    marginTop: 10,
  },
  borderStyle: {
    borderColor: colors.p1,
    height: HP('10'),
    width: WP('14'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    height: HP('10'),
    width: WP('25'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  aicenter: {
    alignItems: 'center',
    justifyContent: 'center',
    height: HP('10'),
    width: WP('25'),
  },
});
