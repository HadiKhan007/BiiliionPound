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
import {OngoingItem} from './OngoingItem';
export const OngoingEventCard = ({onPressCard}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPressCard}>
      <View style={styles.primaryContainer}>
        <ImageBackground
          style={styles.bgContainer}
          source={appImages.sample_exercise}
          imageStyle={styles.imageStyle}>
          <View style={styles.littleBox}>
            <Text style={styles.textStyle}>10 June</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.secondaryContainer}>
        <Text style={styles.titleStyle} numberOfLines={1}>
          Funxional Fitness Burb...
        </Text>
        <OngoingItem
          title={'+20 Going'}
          titleStyle={styles.countStyle}
          imageHeight={24}
          imageWidth={24}
          subtitle={'$59.99'}
        />
        <View style={styles.itemsStyle}>
          <View style={styles.textAlignment}>
            <Image source={appIcons.location} style={styles.locationStyle} />
            <Text style={styles.textStyle}>Your Favorite Gym`</Text>
          </View>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>Joined</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WP('65'),
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
  },
  textStyle: {
    color: colors.p1,
    textAlign: 'center',
    fontSize: size.large,
    fontFamily: family.OpenSans_Regular,
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
