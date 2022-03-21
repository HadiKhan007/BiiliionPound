import {Image, StyleSheet, Text, View, Animated} from 'react-native';
import React, {useState} from 'react';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';
import {
  Swipeable,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
export const RepsInput = ({
  tintColor,
  backgroundColor,
  onDeletePress,
  onPressCard,
  enableAddSet,
  enableSwipe,
  onPressAddSet,
  item,
  inputList,
}) => {
  const [lbs, setLbs] = useState('');
  const [reps, setReps] = useState('');
  const renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onDeletePress}
        style={styles.delContainer}>
        <Animated.Image
          source={appIcons.delete}
          style={[styles.delImageStyle, {transform: [{scale}]}]}
        />
      </TouchableOpacity>
    );
  };
  return (
    <Swipeable
      containerStyle={styles.cardContainer}
      enabled={enableSwipe}
      renderRightActions={renderRightActions}>
      <TouchableOpacity
        onPress={onPressCard}
        activeOpacity={0.7}
        style={[
          styles.conatiner,
          {
            backgroundColor: backgroundColor,
          },
        ]}>
        <View style={styles.setinputCon}>
          <Text style={styles.titleStyle}>SETS</Text>
          <TextInput
            placeholder={`${item?.id || inputList.length + 1}`}
            placeholderTextColor={colors.b7}
            value={item?.id}
            editable={false}
            maxLength={2}
            style={styles.setInput}
          />
        </View>
        <View style={styles.lbsInputCon}>
          <Text style={styles.titleStyle}>LBS</Text>
          <TextInput
            placeholder={item?.lbsValue}
            placeholderTextColor={colors.b7}
            onChangeText={text => {
              setLbs(text);
            }}
            maxLength={5}
            style={styles.lbsInput}
          />
        </View>
        <View style={styles.lbsInputCon}>
          <Text style={styles.titleStyle}>REPS</Text>
          <TextInput
            placeholder={item?.repValue}
            placeholderTextColor={colors.b7}
            onChangeText={text => {
              setReps(text);
            }}
            maxLength={5}
            style={styles.lbsInput}
          />
        </View>
        <TouchableOpacity style={[styles.btnConatiner]}>
          <Image source={appIcons.tick} style={[styles.tickStyle]} />
        </TouchableOpacity>
        <View style={[styles.addBtnContainer]}>
          {enableAddSet && (
            <TouchableOpacity
              onPress={() => onPressAddSet(lbs, reps)}
              style={styles.addBtn}>
              <Text style={styles.addBtntxt}>Add Set</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    marginVertical: 5,
  },
  conatiner: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WP('3'),
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
  addBtnContainer: {
    marginTop: 20,
    height: 32,
    width: 74,
    marginHorizontal: 5,
  },
  addBtn: {
    backgroundColor: colors.p1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 74,
  },
  addBtntxt: {
    color: colors.white,
    fontSize: size.tiny,
    fontFamily: family.OpenSans_Regular,
  },
  delContainer: {
    backgroundColor: colors.r1,
    width: 78,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  delImageStyle: {
    height: 20,
    width: 16,
    resizeMode: 'contain',
  },
});
