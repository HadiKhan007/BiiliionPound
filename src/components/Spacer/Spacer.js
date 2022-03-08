import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WP} from '../../shared/exporter';

const Spacer = ({params}) => <View style={styles.spacer} />;

const styles = StyleSheet.create({
  spacer: {
    marginTop: WP('2'),
    marginBottom: WP('2'),
  },
});

export {Spacer};
