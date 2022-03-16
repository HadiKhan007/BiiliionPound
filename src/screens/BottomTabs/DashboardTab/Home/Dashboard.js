import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {AppHeader, HomeCircle, HomeHeader} from '../../../../components';
import {appIcons} from '../../../../shared/exporter';
const Dashboard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <HomeHeader
          title={'Welcome Back'}
          subtitle={'Stefani Wong'}
          icon={appIcons.notification}
          onPressBtn={() => {}}
        />
        <View style={styles.itemView}>
          <HomeCircle
            icon={appIcons.plus}
            title={'5,722'}
            subtitle={'Total Pounds Lifted'}
            onPressAdd={() => {
              navigation?.navigate('ExerciseStack');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
