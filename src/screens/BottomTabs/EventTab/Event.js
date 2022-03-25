import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppHeader, OngoingEventCard, PrimaryHeading} from '../../../components';
import {appIcons} from '../../../shared/exporter';

const Event = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader title={'Event'} />
        <View style={styles.itemConatiner}>
          <PrimaryHeading title={'Ongoing Events'} normalText={'See All'} />
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={[1, 2, 3]}
              renderItem={({item}) => {
                return <OngoingEventCard />;
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Event;
