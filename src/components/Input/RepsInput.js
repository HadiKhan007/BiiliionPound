import {Image, StyleSheet, Text, View, Animated} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size} from '../../shared/exporter';
import {
  Swipeable,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
export const RepsInput = ({tintColor, backgroundColor}) => {
  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [0, -20, 1, 0],
    });
    return (
      <Animated.View
        style={[
          {
            backgroundColor: 'red',
            width: 80,
            height: 80,
            justifyContent: 'center',
            transform: [{translateX: trans}],
          },
        ]}>
        <Text>Archive</Text>
      </Animated.View>
    );
  };
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.conatiner}>
        <View style={styles.setinputCon}>
          <Text style={styles.titleStyle}>SETS</Text>
          <TextInput maxLength={2} style={styles.setInput} />
        </View>
        <View style={styles.lbsInputCon}>
          <Text style={styles.titleStyle}>LBS</Text>
          <TextInput maxLength={5} style={styles.lbsInput} />
        </View>
        <View style={styles.lbsInputCon}>
          <Text style={styles.titleStyle}>REPS</Text>
          <TextInput maxLength={5} style={styles.lbsInput} />
        </View>
        <TouchableOpacity style={[styles.btnConatiner]}>
          <Image source={appIcons.tick} style={[styles.tickStyle]} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.addBtn]}>
          <Text style={styles.addBtntxt}>Add Set</Text>
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: size.xsmall,
    color: colors.b7,
    fontFamily: family.OpenSans_Regular,
  },
  setinputCon: {
    width: '15%',
    alignItems: 'center',
  },
  lbsInputCon: {
    width: '25%',
    alignItems: 'center',
  },
  setInput: {
    height: 32,
    width: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.p1,
    marginVertical: 10,
    paddingVertical: 0,
    textAlign: 'center',
  },
  lbsInput: {
    height: 32,
    width: 74,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.p1,
    marginVertical: 10,
    paddingVertical: 0,
    textAlign: 'center',
  },
  btnConatiner: {
    height: 32,
    width: 32,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.g10,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  tickStyle: {
    height: 9,
    width: 13,
    resizeMode: 'contain',
    tintColor: colors.g1,
  },
  addBtn: {
    backgroundColor: colors.p1,
    marginTop: 20,
    height: 32,
    width: 74,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  addBtntxt: {
    color: colors.white,
    fontSize: size.tiny,
    fontFamily: family.OpenSans_Regular,
  },
});
