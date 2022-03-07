import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {colors} from '../../shared/exporter';
import styles from './styles';

const Walkthrough = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.p1} />
      <View style={styles.rootContainer}>
        <Text style={styles.textStyle}> Walkthrough Screens </Text>
        <Text style={styles.textStyle}> To be started </Text>
      </View>
    </>
  );
};

export default Walkthrough;
