import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {AppHeader, HomeCircle, HomeHeader} from '../../../../components';
import {appIcons, capitalizeFirstLetter} from '../../../../shared/exporter';
import {useSelector} from 'react-redux';
const Dashboard = ({navigation}) => {
  const {userInfo} = useSelector(state => state?.auth);
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <HomeHeader
          title={'Welcome Back'}
          subtitle={`${
            capitalizeFirstLetter(userInfo?.user?.first_name) || 'Stefani'
          } ${capitalizeFirstLetter(userInfo?.user?.last_name) || 'Wong'}`}
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
