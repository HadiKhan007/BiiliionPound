import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  appIcons,
  capitalizeFirstLetter,
  colors,
  family,
  size,
} from '../../../shared/exporter';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const PaymentCard = ({
  cardDate,
  title,
  cardNo,
  bgPic,
  onPressCard,
  cardSelection,
  index,
}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={bgPic}
      imageStyle={styles.imageStyle}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPressCard}>
        <View style={styles.header}>
          <Text style={styles.dateStyle}>{cardDate}</Text>
          {cardSelection?.id === index ? (
            <View style={styles.tickContainer}>
              <Image source={appIcons.tick} style={styles.tickStyle} />
            </View>
          ) : (
            false
          )}
        </View>
        <View>
          <Text style={styles.cardnoStyle}>{cardNo} </Text>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 92,
    width: 152,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  imageStyle: {
    // height: 92,
    // width: 152,
    borderRadius: 5,
  },
  dateStyle: {
    fontFamily: family.Poppins_Regular,
    color: colors.white,
    fontSize: size.xxtiny,
    marginTop: 10,
    paddingVertical: 1,
  },

  header: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tickContainer: {
    height: 21,
    width: 21,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
  },
  tickStyle: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    tintColor: colors.gr1,
  },
  cardnoStyle: {
    color: colors.white,
    fontSize: size.tiny,
    fontFamily: family.Poppins_Regular,
    paddingVertical: 1,
  },
  titleStyle: {
    fontFamily: family.Poppins_Regular,
    color: colors.white,
    fontSize: size.xxtiny,
    paddingVertical: 1,
  },
});
