import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppHeader} from '../../../components';
import {appIcons} from '../../../shared/exporter';

const Event = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader title={'Event'} />
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default Event;
