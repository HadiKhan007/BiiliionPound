import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import {Input} from 'react-native-elements';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';

export const SearchBar = ({
  onChangeText,
  placeholder,
  onPressFilter,
  onPressDots,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainerStyle}>
        <Input
          inputStyle={styles.inputStyle}
          onChangeText={onChangeText}
          inputContainerStyle={styles.inputContainer}
          placeholderTextColor={colors.g4}
          placeholder={placeholder}
          leftIcon={<Image style={styles.icon19} source={appIcons.search} />}
        />
      </View>
      <TouchableOpacity
        onPress={onPressFilter}
        style={styles.rightInputContainer}>
        <Image style={styles.rightIcon} source={appIcons.filter} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPressDots}
        style={styles.rightInputContainer2}>
        <Image style={styles.dotIcon} source={appIcons.threeDots} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    justifyContent: 'space-between',
    height: 48,
  },
  icon19: {
    height: 19,
    width: 19,
    resizeMode: 'contain',
    marginRight: 8,
  },
  rightIcon: {
    height: 10,
    width: 16,
    resizeMode: 'contain',
  },
  dotIcon: {
    height: 16,
    width: 5,
    resizeMode: 'contain',
  },
  inputStyle: {
    fontFamily: family.OpenSans_Regular,
    fontSize: size.small,
    borderBottomWidth: 0,
    color: colors.g4,
  },
  inputContainerStyle: {
    borderRadius: 8,
    backgroundColor: colors.g10,
    borderBottomWidth: 0,
    paddingHorizontal: 10,
    height: 48,
    width: '66%',
  },
  inputContainer: {
    borderRadius: 8,
    backgroundColor: colors.g10,
    borderBottomWidth: 0,
  },
  rightInputContainer: {
    width: '14%',
    backgroundColor: colors.g10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightInputContainer2: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
