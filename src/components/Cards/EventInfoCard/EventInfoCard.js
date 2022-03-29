import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  appIcons,
  colors,
  eventDetail_list,
  family,
  size,
} from '../../../shared/exporter';

export const EventInfoCard = ({title, subtitle, rightIcon}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headerStyle}>
          {title} <Text style={styles.title2}>{subtitle}</Text>
        </Text>
        {rightIcon && (
          <TouchableOpacity style={styles.rightIconStyle}>
            <Image style={styles.rightIcon} source={rightIcon} />
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={eventDetail_list}
        renderItem={({item}) => {
          return (
            <View style={styles.cardContainer}>
              <View style={styles.cardLeftContainer}>
                <Image source={item?.icon} style={styles.icon24} />
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.titleStyle}>{item?.title}</Text>
                {item?.date ? (
                  <Text style={styles.subtitleStyle}>{item?.date}</Text>
                ) : (
                  false
                )}
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
    marginBottom: 5,
  },
  rightIconStyle: {
    backgroundColor: colors.gr1,
    height: 60,
    width: 60,
    borderRadius: 5,
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
    borderRadius: 5,
  },
  cardLeftContainer: {
    width: '12%',
    backgroundColor: colors.p5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
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
  title2: {
    fontSize: size.xsmall,
    color: colors.g1,
    fontFamily: family.OpenSans_Regular,
  },
});
