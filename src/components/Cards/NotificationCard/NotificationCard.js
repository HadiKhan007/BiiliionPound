import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  appIcons,
  colors,
  family,
  profile_uri,
  size,
} from '../../../shared/exporter';
import {Image} from 'react-native-elements';
export const NotificationCard = ({
  profileImage,
  title,
  subtitle,
  onPressThreeDots,
  event_name,
  onPressCard,
}) => {
  return (
    <TouchableOpacity onPress={onPressCard} style={styles.conatiner}>
      <View style={styles.leftContainer}>
        <View style={styles.profileImage}>
          <Image
            progressiveRenderingEnabled={true}
            style={styles.imageStyle}
            source={{uri: profileImage || profile_uri}}
          />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View>
          <Text style={styles.titleStyle}>{`${title} (${event_name})`}</Text>
          <Text style={styles.subtitleStyle}>{subtitle}</Text>
        </View>
        <TouchableOpacity onPress={onPressThreeDots} hitSlop={styles.hitSlop}>
          <Image style={styles.DotStyle} source={appIcons.threeDots} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
    borderRadius: 100,
    resizeMode: 'contain',
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
    resizeMode: 'cover',
  },
  hitSlop: {
    top: 30,
    bottom: 30,
    left: 30,
    right: 30,
  },
});
