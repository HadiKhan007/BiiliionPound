import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../shared/exporter';

export const AddCardModal = ({
  title,
  onPressCard,
  onPressWallet,
  btn,
  onCardChange,
  onFocus,
  disabled,
  onChangeText,
}) => {
  return (
    <View>
      {title && (
        <View style={styles.h1container}>
          <Text style={styles.h1}>{title}</Text>
        </View>
      )}
      <View style={styles.fieldContainer}>
        <CardField
          placeholder={{
            number: 4242424224242,
          }}
          postalCodeEnabled={false}
          cardStyle={styles.cardStyle}
          style={styles.payStyle}
          onCardChange={onCardChange}
          onFocus={onFocus}
        />
      </View>
      <PaymentInput
        onChangeText={onChangeText}
        placeholder={'Card Holder Name'}
        placeholderTextColor={colors.g1}
      />

      <View style={{paddingVertical: 20}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.OpenSans_Regular,
  },
  h1container: {
    paddingVertical: 30,
  },
  fieldContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.g2,
  },
  cardStyle: {
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    placeholderColor: colors.g1,
    fontSize: size.small,
  },
  payStyle: {
    width: '100%',
    height: 50,
    left: -15,
  },
  infoStyle: {
    color: colors.g1,
    fontSize: size.xxsmall,
  },
});
