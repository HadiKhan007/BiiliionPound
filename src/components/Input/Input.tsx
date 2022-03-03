import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Input as RNInput, IconProps} from 'react-native-elements';
import {family, size, colors, WP} from '../../shared/exporter';

interface InputProps {
  placeholder: string;
  leftIcon: IconProps;
  rightIcon: IconProps;
  secureTextEntry: boolean;
}

const Input = ({
  placeholder,
  leftIcon,
  rightIcon,
  secureTextEntry,
}: InputProps) => {
  return (
    <RNInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      leftIcon={leftIcon}
      rightIcon={rightIcon ? rightIcon : null}
      autoCompleteType={undefined}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {},
  inputStyle: {
    fontFamily: family.OpenSans_Regular,
    fontSize: size.small,
    borderBottomWidth: 0,
    paddingHorizontal: WP('1.5'),
  },
  inputContainerStyle: {
    borderRadius: 25,
    backgroundColor: '#E6E6E6',
    borderBottomWidth: 0,
    paddingHorizontal: WP('5'),
  },
});
