import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Input as RNInput, IconProps, Icon} from 'react-native-elements';
import {useStore} from 'react-redux';
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
  const [secure, setSecure] = React.useState(secureTextEntry);

  const [showPass, setShowPass] = React.useState(true);

  return (
    <RNInput
      placeholder={placeholder}
      secureTextEntry={showPass}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      leftIcon={leftIcon}
      rightIcon={
        secureTextEntry ? (
          <Icon
            onPress={() => {
              setShowPass(!showPass);
            }}
            name={showPass ? 'eye-with-line' : 'eye'}
            type={'entypo'}
            size={22}
            color={colors.g1}
            tvParallaxProperties={undefined}
          />
        ) : null
      }
      autoCompleteType={undefined}
    />
  );
};

export {Input};

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
