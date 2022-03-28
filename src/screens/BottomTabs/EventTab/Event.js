import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  AppHeader,
  OngoingEventCard,
  PrimaryHeading,
  UpcomingEventCard,
} from '../../../components';
import {appIcons, spacing} from '../../../shared/exporter';

const Event = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader title={'Event'} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.itemConatiner}>
          <PrimaryHeading
            title={'Ongoing Events'}
            TouchableText={'See All'}
            onPress={() => navigation.navigate('OngoingEvent')}
          />
          <View style={spacing.py2}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={[1, 2, 3]}
              renderItem={({item}) => {
                return (
                  <OngoingEventCard
                    onPressCard={() => navigation.navigate('MilitaryPress')}
                  />
                );
              }}
            />
          </View>
          <PrimaryHeading title={'Upcoming Events'} />
          <View style={{flex: 1}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={[1, 2, 3, 4, 5, 6, 7, 8]}
              renderItem={({item}) => {
                return (
                  <UpcomingEventCard
                    onPressCard={() => {
                      navigation.navigate('EventDetail');
                    }}
                  />
                );
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Event;
