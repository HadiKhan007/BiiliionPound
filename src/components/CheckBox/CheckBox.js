import {StyleSheet, Image} from 'react-native';
import React from 'react';
import {CheckBox} from 'react-native-elements';
import PropTypes from 'prop-types';

export const Checkbox = ({
  toggleCheckBox,
  setToggleCheckBox,
  checkIcon,
  uncheckIcon,
  CheckImagestyle,
  UnCheckImagestyle,
}) => {
  return (
    <CheckBox
      hitSlop={styles.hitSlop}
      containerStyle={{padding: 0}}
      checked={toggleCheckBox}
      checkedIcon={<Image source={checkIcon} style={CheckImagestyle} />}
      uncheckedIcon={<Image source={uncheckIcon} style={UnCheckImagestyle} />}
      onPress={setToggleCheckBox}
    />
  );
};
const styles = StyleSheet.create({
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 30,
  },
});
CheckBox.propTypes = {
  toggleCheckBox: PropTypes.bool,
  setToggleCheckBox: PropTypes.func,
};
