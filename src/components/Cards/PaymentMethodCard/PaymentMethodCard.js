import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size} from '../../../shared/exporter';

export const PaymentMethodCard = ({
  onPressCard,
  selectedCard,
  index,
  title,
  icon,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.aiCenter}>
        <Image style={styles.imageStyle} source={icon} />
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onPressCard}>
        <Image
          style={styles.checkBox}
          source={selectedCard.id == index ? appIcons.radio : appIcons?.circle}
        />
      </TouchableOpacity>
    </View>
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
    justifyContent: 'space-between',
  },
  imageStyle: {
    height: 16,
    width: 32,
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
});
