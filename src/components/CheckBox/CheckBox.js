import {StyleSheet, Image} from 'react-native';
import React from 'react';
import {CheckBox} from 'react-native-elements';
import {appIcons} from '../../shared/exporter';
import PropTypes from 'prop-types';

export const Checkbox = ({toggleCheckBox, setToggleCheckBox}) => {
  return (
    <CheckBox
      hitSlop={styles.hitSlop}
      size={20}
      containerStyle={{padding: 0}}
      checked={toggleCheckBox}
      checkedIcon={<Image source={appIcons.checked} style={styles.icon15} />}
      uncheckedIcon={
        <Image source={appIcons.unchecked} style={styles.icon15} />
      }
      onPress={setToggleCheckBox}
    />
  );
};
const styles = StyleSheet.create({
  icon15: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
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
