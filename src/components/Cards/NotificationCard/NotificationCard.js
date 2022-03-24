import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size} from '../../../shared/exporter';

export const NotificationCard = ({profileImage, title, subtitle}) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.leftContainer}>
        <View style={styles.profileImage}>
          <Image style={styles.imageStyle} source={{uri: profileImage}} />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.subtitleStyle}>{subtitle}</Text>
        </View>
        <TouchableOpacity>
          <Image style={styles.DotStyle} source={appIcons.threeDots} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
  },
  leftContainer: {
    width: '15%',
  },
  titleStyle: {
    fontSize: size.tiny,
    color: colors.b7,
    fontFamily: family.OpenSans_Medium,
  },
  subtitleStyle: {
    fontSize: size.xxtiny,
    fontFamily: family.OpenSans_Regular,
    color: colors.g5,
    marginTop: 5,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
    resizeMode: 'contain',
    backgroundColor: 'green',
  },
  rightContainer: {
    width: '85%',
    paddingVertical: 2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  DotStyle: {
    height: 16,
    width: 3,
    resizeMode: 'contain',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
    resizeMode: 'contain',
  },
});
