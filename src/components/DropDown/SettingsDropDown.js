import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size} from '../../shared/exporter';

const SettingsDropDown = ({item, onPress}) => {
  return (
    <>
      <View style={styles.dropDownContainer}>
        <View style={styles.innerContainer}>
          <Image source={appIcons?.genderIcon} style={styles.icon} />
          <Text style={styles.title}>{item?.title}</Text>
        </View>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.7}
          style={styles.iconAndText}>
          <View style={styles.innerIconAndText}>
            <Text
              style={[styles.title, {fontSize: size.small, color: colors.p1}]}>
              {'Male'}
            </Text>
            <View style={styles.triangle}></View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SettingsDropDown;

const styles = StyleSheet.create({
  dropDownContainer: {
    width: '100%',
    marginTop: '10%',
    borderRadius: 5,
    borderColor: colors.g10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerContainer: {
    // width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: '3%',
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: family.Poppins_Medium,
    fontSize: size.medium,
    marginStart: '5%',
  },
  iconAndTextContainer: {
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  innerIconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.b1,
    transform: [{rotate: '180deg'}],
    marginStart: '5%',
  },
  iconAndText: {
    width: '25%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
