import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {appIcons, appImages, colors} from '../../shared/exporter';

interface SelectButtonProps {
  onPress: () => void;
  disabled: boolean;
}

export const SelectButton = ({onPress, disabled}: SelectButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.container}>
      <Image
        source={appIcons.tick}
        resizeMode={'contain'}
        style={styles.selectedImage}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 57,
    height: 57,
    borderRadius: 57,
    backgroundColor: colors.p1,
  },
  selectedImage: {
    height: 35,
    width: 35,
    tintColor: colors.white,
    resizeMode: 'contain',
  },
});
