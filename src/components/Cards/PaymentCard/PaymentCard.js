import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const PaymentCard = () => {
  return (
    <ImageBackground style={styles.container}>
      <Text>PaymentCard</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 92,
    width: 152,
  },
});
