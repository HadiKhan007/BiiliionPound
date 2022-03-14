import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
const Dashboard = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}></View>
    </SafeAreaView>
  );
};

export default Dashboard;
