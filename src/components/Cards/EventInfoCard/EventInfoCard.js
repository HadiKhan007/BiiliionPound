import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size} from '../../../shared/exporter';

export const EventInfoCard = () => {
  return (
    <View style={{padding: 20}}>
      <View style={styles.container}>
        <Text style={styles.headerStyle}>Jumping Pack</Text>
        <TouchableOpacity style={styles.rightIconStyle}>
          <Image style={styles.rightIcon} source={appIcons.user} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={[1, 2, 3]}
        renderItem={({item}) => {
          return (
            <View style={styles.cardContainer}>
              <View style={styles.cardLeftContainer}>
                <Image source={appIcons.user} style={styles.icon24} />
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.titleStyle}>Sat,May 25, 2022</Text>
                <Text style={styles.subtitleStyle}>10:00 AM - 9:00 PM</Text>
              </View>
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
    width: '88%',
    marginHorizontal: 10,
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
