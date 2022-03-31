import React, {useEffect} from 'react';
import {View, SafeAreaView, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import {
  AppHeader,
  BlankField,
  OngoingEventCard,
  PrimaryHeading,
  UpcomingEventCard,
} from '../../../components';
import {spacing} from '../../../shared/exporter';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  get_ongoing_event_request,
  get_upcoming_event_request,
  set_ongoing_event_request,
  set_upcoming_event_request,
} from '../../../redux/actions';

const Event = ({navigation}) => {
  const isFocus = useIsFocused(null);
  //Redux States
  const dispatch = useDispatch(null);
  const {upcoming_events, ongoing_events} = useSelector(state => state?.event);

  useEffect(() => {
    if (isFocus) {
      getUpcomingEvents();
      getOngoingEvents();
    }
  }, [isFocus]);

  //**********Get Upcoming Events***********
  const getUpcomingEvents = () => {
    //On get upcoming event success
    const onUpcomingSuccess = res => {
      console.log('Upcoming Events', res);
    };
    //On get upcoming event failure
    const onUpcomingFailure = res => {
      console.log(res);
    };
    //Get Upcomig Events
    dispatch(get_upcoming_event_request(onUpcomingSuccess, onUpcomingFailure));
  };

  //************Get Ongoing Events**************
  const getOngoingEvents = () => {
    //On get Ongoing event success
    const onOngoingSuccess = res => {
      console.log('Ongoing Events', res);
    };
    //On get Ongoing event failure
    const onOngoingFailure = res => {
      console.log(res);
    };
    //Get Upcomig Events
    dispatch(get_ongoing_event_request(onOngoingSuccess, onOngoingFailure));
  };

  //**********On Press On Upcoming Events**********
  const UpcomingEventPress = item => {
    //set  upcoming event success
    const onUpcomingPressSuccess = () => {
      navigation.navigate('EventDetail');
      console.log('On Upcoming Event Success');
    };
    //set upcoming event failure
    const onUpcomingPressFailure = () => {
      console.log('On Upcoming Event Failure');
    };
    dispatch(
      set_upcoming_event_request(
        item,
        onUpcomingPressSuccess,
        onUpcomingPressFailure,
      ),
    );
  };

  //***********On Press On Going Events***********
  const OnGoingEventPress = item => {
    //Set Ongoing Success
    const onGoingPressSuccess = () => {
      navigation.navigate('OngoingEventDetail');
      console.log('On Going Event Success');
    };
    //Set  onGoing event failure
    const onGoingPressFailure = () => {
      console.log('On Going Event Failure');
    };
    dispatch(
      set_ongoing_event_request(item, onGoingPressSuccess, onGoingPressFailure),
    );
  };

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
          {ongoing_events != '' ? (
            <View style={spacing.py2}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={ongoing_events?.slice(0, 3)}
                renderItem={({item}) => {
                  return (
                    <OngoingEventCard
                      event_image={item?.event_image_url}
                      title={item?.title}
                      onPressCard={() => {
                        OnGoingEventPress(item);
                      }}
                      users_lists={item?.users}
                      event_date={item?.start_date}
                      event_status={item?.status}
                      event_price={item?.price}
                    />
                  );
                }}
              />
            </View>
          ) : (
            <BlankField title={'No ongoing Events yet!'} />
          )}
          <PrimaryHeading title={'Upcoming Events'} />
          {ongoing_events != '' ? (
            <View style={{flex: 1}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={upcoming_events}
                renderItem={({item}) => {
                  return (
                    <UpcomingEventCard
                      upcoming_event_item={item}
                      onPressCard={() => {
                        UpcomingEventPress(item);
                      }}
                    />
                  );
                }}
              />
            </View>
          ) : (
            <BlankField title={'No Upcoming Events yet!'} />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Event;
