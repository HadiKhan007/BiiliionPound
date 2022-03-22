import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {appIcons, appImages, colors} from '../../shared/exporter';

interface SelectButtonProps {
  onPress: () => void;
}

export const SelectButton = ({onPress}: SelectButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
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
    height: 12,
    width: 19,
    tintColor: colors.white,
    resizeMode: 'contain',
  },
});
