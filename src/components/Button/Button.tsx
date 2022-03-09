import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {
  HP,
  colors,
  appRadius,
  family,
  appIcons,
  WP,
  size,
} from '../../shared/exporter';

interface ButtonProps {
  title: string;
  withRightIcon: boolean;
  onPress: () => void;
}

const Button = ({title, withRightIcon, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.main,
        {justifyContent: withRightIcon ? 'space-between' : 'center'},
      ]}>
      <Text></Text>
      <Text style={styles.textStyle}>{title}</Text>
      {withRightIcon ? (
        <Image
          source={appIcons.forwardIcon}
          style={{width: 15, height: 15, right: WP('5')}}
        />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: '80%',
    height: HP('6'),
    backgroundColor: colors.p1,
    borderRadius: appRadius.buttonRadius,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.p1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  textStyle: {
    color: colors.white,
    fontFamily: family.OpenSans_Bold,
    fontSize: size.small,
  },
});

export {Button};
