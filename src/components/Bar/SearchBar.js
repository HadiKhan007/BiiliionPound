import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import {Input} from 'react-native-elements';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';

export const SearchBar = ({onChangeText, placeholder, onPressFilter}) => {
  return (
    <View>
      <View style={styles.container}>
        <Input
          inputStyle={styles.inputStyle}
          inputContainerStyle={styles.inputContainerStyle}
          onChangeText={onChangeText}
          placeholderTextColor={colors.g4}
          placeholder={placeholder}
          leftIcon={<Image style={styles.icon19} source={appIcons.search} />}
        />
        <TouchableOpacity
          onPress={onPressFilter}
          style={styles.rightInputContainer}>
          <Image style={styles.rightIcon} source={appIcons.filter} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '85%',
    marginTop: 5,
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
  },
  rightInputContainer: {
    height: 48,
    width: 48,
    backgroundColor: colors.g10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
