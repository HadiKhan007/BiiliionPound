import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {Button, PaymentCardField} from '..';
import {
  scrHeight,
  colors,
  size,
  family,
  period_list,
  appIcons,
  WP,
  spacing,
} from '../../shared/exporter';

export const DeleteItemModal = ({
  show,
  onPressHide,
  bgColor,
  borderleftRadius,
  borderRightRadius,
  onPressDelete,
}) => {
  return (
    <ActionSheet
      indicatorColor={'transparent'}
      gestureEnabled={true}
      closable={true}
      onClose={onPressHide}
      keyboardHandlerEnabled={true}
      ref={show}
      containerStyle={[
        styles.containerStyle,
        {
          backgroundColor: bgColor,
          borderTopLeftRadius: borderleftRadius,
          borderTopRightRadius: borderRightRadius,
        },
      ]}>
      <View style={styles.aiCenter}>
        <Button
          bgColor={colors.r1}
          onPress={onPressDelete}
          title={'Delete'}
          shadowColor={colors.white}
        />
      </View>
      <TouchableOpacity
        onPress={onPressHide}
        style={[styles.aiCenter, spacing.mb8]}>
        <Text style={styles.textStyle}>Cancel</Text>
      </TouchableOpacity>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: WP('5'),
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontSize: size.normal,
    color: colors.b7,
    fontFamily: family.Poppins_Regular,
  },
  icon24: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    tintColor: colors.b1,
  },
  aiCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  textStyle: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.OpenSans_Bold,
  },
});
