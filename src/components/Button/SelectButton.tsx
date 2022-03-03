import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {appImages} from '../../shared/exporter';

interface SelectButtonProps {
  onPress: () => void;
}

const SelectButton = ({onPress}: SelectButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={appImages.selectedButton}
        resizeMode={'contain'}
        style={styles.selectedImage}
      />
    </TouchableOpacity>
  );
};

export default SelectButton;

const styles = StyleSheet.create({
  container: {},
  selectedImage: {
    width: 55,
    height: 55,
    alignSelf: 'center',
  },
});
