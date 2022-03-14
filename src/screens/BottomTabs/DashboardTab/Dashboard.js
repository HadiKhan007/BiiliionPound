import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppHeader, HomeHeader} from '../../../components';
const Dashboard = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <HomeHeader />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
