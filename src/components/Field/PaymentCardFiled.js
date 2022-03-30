import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../shared/exporter';
import {CardField, useStripe} from '@stripe/stripe-react-native';

export const PaymentCardField = ({
  onCardChange,
  onFocus,
  disabled,
  onChangeText,
}) => {
  return (
    <View>
      <View style={styles.fieldContainer}>
        <CardField
          placeholder={{
            number: 'Card Number',
          }}
          postalCodeEnabled={false}
          cardStyle={styles.cardStyle}
          style={styles.payStyle}
          onCardChange={onCardChange}
          onFocus={onFocus}
        />
      </View>
      <View style={styles.fieldContainer}>
        <TextInput
          placeholderTextColor={colors.g1}
          placeholder={'Card Holder Name'}
          style={styles.simpleInput}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.g6,
    marginVertical: 10,
  },
  cardStyle: {
    backgroundColor: colors.white,
    color: colors.b1,
    fontSize: size.xsmall,
  },
  simpleInput: {
    backgroundColor: colors.white,
    color: colors.b1,
    fontSize: size.xsmall,
    height: 48,
  },
  payStyle: {
    width: '100%',
    height: 45,
    left: -10,
  },
});
