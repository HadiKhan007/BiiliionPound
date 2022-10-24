import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../shared/exporter';

const SettingsInputs = ({
  value,
  onChangeText,
  inputIcon,
  inputTitle,
  innerText,
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.txtIcon}>
        <Image source={inputIcon} style={styles.icon} />
        <Text style={styles.title}>{inputTitle}</Text>
      </View>
      <View style={styles.inputView}>
        <View style={styles.inputEditIcon}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            style={styles.inputStyle}
            placeholder={'Enter value here'}
          />
          <Text style={styles.inputValue}>{innerText}</Text>
        </View>
        {/* <TouchableOpacity
          onPress={() => inputEl.current.focus()}
          activeOpacity={0.8}
          style={styles.editIconContainer}>
          <Image source={appIcons.editIcon} style={[styles.icon, iconStyle]} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default SettingsInputs;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    padding: 15,
    marginTop: '10%',
    borderRadius: 5,
    borderColor: colors.g10,
    borderWidth: 1,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '4%',
    alignItems: 'center',
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  txtIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: family.Poppins_Medium,
    fontSize: size.medium,
    marginStart: '2%',
  },
  inputEditIcon: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    borderRadius: 10,
    borderColor: colors.p1,
    borderWidth: 1,
  },
  inputStyle: {
    width: '80%',
    paddingStart: 10,
    fontFamily: family.Poppins_Medium,
    color: colors?.p1,
  },
  editIconContainer: {
    width: 35,
    height: 35,
    backgroundColor: colors.p1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputValue: {
    fontFamily: family.Poppins_Regular,
    color: colors.p1,
  },
});
