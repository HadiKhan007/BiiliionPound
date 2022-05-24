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
  renderErrorMessage: boolean;
  onChangeText: () => {};
  onBlur: () => {};
  errorMessage: string;
  blurOnSubmit: boolean;
  disableFullscreenUI: boolean;
  autoCapitalize: any;
  touched: any;
  value: any;
  onSubmitEditing: any;
  editable: boolean;
  onPress: any;
}

const Input = ({
  placeholder,
  leftIcon,
  rightIcon,
  secureTextEntry,
  renderErrorMessage,
  errorMessage,
  onChangeText,
  disableFullscreenUI,
  autoCapitalize,
  touched,
  blurOnSubmit,
  onBlur,
  value,
  onSubmitEditing,
  editable,
  onPress,
}: InputProps) => {
  const [showPass, setShowPass] = React.useState(secureTextEntry);

  return (
    <RNInput
      onPressIn={onPress}
      placeholder={placeholder}
      secureTextEntry={showPass}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      leftIcon={leftIcon}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      disableFullscreenUI={disableFullscreenUI}
      autoCapitalize={autoCapitalize}
      blurOnSubmit={blurOnSubmit}
      editable={editable}
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
        ) : (
          rightIcon
        )
      }
      errorMessage={errorMessage}
      renderErrorMessage={renderErrorMessage}
      autoCompleteType={undefined}
      onSubmitEditing={onSubmitEditing}
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
