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
  OngoingItem,
  PrimaryHeading,
  UpcomingEventCard,
} from '../../../../components';
import {appIcons, colors, spacing} from '../../../../shared/exporter';

const OngoingEvent = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader
          title={'Ongoing Events'}
          titleColor={colors.b7}
          icon={appIcons.backArrow}
        />
        <View style={styles.headerStyle}></View>
        <FlatList
          showsVerticalScrollIndicator={false}
          horizontal={false}
          data={[1, 2, 3, 4]}
          renderItem={({item}) => {
            return (
              <OngoingEventCard
                allEvents={true}
                onPressCard={() => {
                  navigation.navigate('MilitaryPress');
                }}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default OngoingEvent;
