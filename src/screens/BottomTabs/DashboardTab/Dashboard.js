import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {AppHeader, HomeHeader} from '../../../components';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const Dashboard = () => {
  useEffect(() => {
    GoogleSignin.signOut();
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <HomeHeader />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
