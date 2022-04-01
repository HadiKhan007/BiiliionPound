import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size} from '../../../shared/exporter';
import {ApplePayButton, GooglePayButton} from '@stripe/stripe-react-native';

export const PaymentMethodCard = ({
  onPressCard,
  selectedCard,
  index,
  title,
  icon,
  applePaySupport,
}) => {
  return (
    <>
      {index === 0 && (
        <TouchableOpacity
          onPress={onPressCard}
          style={[
            styles.container,
            {
              borderColor: selectedCard.id == index ? colors.p1 : colors.g10,
              shadowColor: selectedCard.id == index ? colors.p1 : colors.g10,
            },
          ]}>
          <View style={styles.aiCenter}>
            <Image style={styles.imageStyle} source={icon} />
            <Text style={styles.titleStyle}>{title}</Text>
          </View>
          <TouchableOpacity onPress={onPressCard}>
            <Image
              style={styles.checkBox}
              source={
                selectedCard.id == index ? appIcons.radio : appIcons?.circle
              }
            />
          </TouchableOpacity>
        </TouchableOpacity>
      )}
      {applePaySupport && index == 1 ? (
        <ApplePayButton
          type="plain"
          onPress={onPressCard}
          buttonStyle="black"
          borderRadius={5}
          style={styles.appleStyle}
        />
      ) : null}
      {index == 1 && Platform.OS == 'android' ? (
        <View>
          <GooglePayButton
            onPress={onPressCard}
            style={styles.appleStyle}
            type="pay"
          />
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.g10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  imageStyle: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginRight: 10,
    top: 2,
  },
  checkBox: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  aiCenter: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleStyle: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.OpenSans_Regular,
  },
  appleStyle: {
    width: '100%',
    height: 50,
  },
});
