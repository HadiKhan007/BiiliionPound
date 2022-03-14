import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {appIcons, colors, size} from '../../shared/exporter';

export const HomeHeader = ({title, subtitle, icon}) => {
  return (
    <View style={styles.container}>
      <View style={{width: '80%'}}>
        <Text style={styles.titleStyle}>Welcome Back</Text>
        <Text style={styles.subtitleStyle}>Stefani Wong</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={appIcons.notification}
          style={{height: 24, width: 24, resizeMode: 'contain'}}
        />
      </View>
    </View>
  );
};
HomeHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
};
const styles = StyleSheet.create({
  container: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  titleStyle: {
    fontSize: size.tiny,
    color: colors.g2,
    marginBottom: 10,
  },
  subtitleStyle: {
    fontSize: size.h6,
    color: colors.b7,
  },
});
