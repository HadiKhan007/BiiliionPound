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
import {
  appIcons,
  colors,
  profile_uri,
  spacing,
} from '../../../../shared/exporter';
import {useSelector} from 'react-redux';

const OngoingEvent = ({navigation}) => {
  const {ongoing_events} = useSelector(state => state?.event);

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
          data={ongoing_events}
          renderItem={({item}) => {
            return (
              <OngoingEventCard
                title={item?.title}
                event_price={item?.price}
                users_lists={item?.users}
                event_date={item?.start_date}
                event_image={item?.event_image_url}
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
