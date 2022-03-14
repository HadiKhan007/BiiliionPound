import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export const HomeHeader = ({title, subtitle, icon}) => {
  return (
    <View>
      <Text>HomeHeader</Text>
    </View>
  );
};
HomeHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
};
const styles = StyleSheet.create({});
