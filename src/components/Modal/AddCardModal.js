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
} from '../../shared/exporter';

export const AddCardModal = ({
  show,
  onPressHide,
  onAddPress,
  bgColor,
  borderleftRadius,
  borderRightRadius,
  onChangeText,
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
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>Add Credit/Debit Card</Text>
        <TouchableOpacity onPress={onPressHide}>
          <Image style={styles.icon24} source={appIcons.cross} />
        </TouchableOpacity>
      </View>
      <PaymentCardField onChangeText={onChangeText} />
      <View style={styles.aiCenter}>
        <Button onPress={onAddPress} title={'Add Card'} />
      </View>
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
    marginVertical: 20,
  },
});
