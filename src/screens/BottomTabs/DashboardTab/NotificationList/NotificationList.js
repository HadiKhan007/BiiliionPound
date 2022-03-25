import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {AppHeader, NotificationCard, ParaBox} from '../../../../components';
import {appIcons} from '../../../../shared/exporter';
import {FlatList} from 'react-native-gesture-handler';
const NotificationList = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader icon={appIcons.backArrow} title={'Notification'} />
        <View style={styles.itemContainer}>
          <FlatList
            data={[1, 2]}
            renderItem={({item}) => {
              return (
                <NotificationCard
                  profileImage={'https://unsplash.it/400/400?image=1'}
                  title={'Hey, it’s time for lunch'}
                  subtitle={'About 3m ago'}
                />
              );
            }}
            ItemSeparatorComponent={() => {
              return <View style={styles.separator} />;
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationList;
