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
  colors,
  family,
  profile_uri,
  size,
  WP,
} from '../../../shared/exporter';
import {Image} from 'react-native-elements';
export const OngoingItem = ({
  imageHeight,
  imageWidth,
  titleStyle,
  title,
  subtitle,
  width = '40%',
  justifyContent,
  users_lists,
}) => {
  return (
    <View style={styles.itemsStyle}>
      <View style={[styles.flatStyle, {justifyContent: justifyContent}]}>
        <View style={{flexDirection: 'row'}}>
          {users_lists?.map(item => {
            return (
              <View
                style={[
                  styles.smallImageCard,
                  {
                    height: imageHeight,
                    width: imageWidth,
                    marginRight: -10,
                  },
                ]}>
                <Image
                  source={{uri: item?.profile_image}}
                  style={[styles.smallImageStyle]}
                />
              </View>
            );
          })}
        </View>

        {title && (
          <Text style={[titleStyle, {marginLeft: 15}]}>
            {title != 0 && `+${title} Going`}
          </Text>
        )}
      </View>
      {subtitle && <Text style={styles.priceStyle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  itemsStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  smallImageCard: {
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
  flatStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
