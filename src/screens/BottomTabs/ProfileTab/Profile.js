import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppHeader} from '../../../components';
import {appIcons} from '../../../shared/exporter';

const Profile = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader
          title={'Profile'}
          icon={appIcons.backArrow}
          onPressBtn={() => {}}
        />
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
