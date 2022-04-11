import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  AppHeader,
  Loader,
  OngoingEventCard,
  OngoingItem,
  PrimaryHeading,
  UpcomingEventCard,
} from '../../../../components';
import {
  appIcons,
  checkConnected,
  colors,
  profile_uri,
  spacing,
} from '../../../../shared/exporter';
import {useDispatch, useSelector} from 'react-redux';
import {
  get_ongoing_event_request,
  set_event_request,
  set_exercise_screen_request,
} from '../../../../redux/actions';
import {useIsFocused} from '@react-navigation/core';

const OngoingEvent = ({navigation}) => {
  const {ongoing_events} = useSelector(state => state?.event);
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch(null);
  const isFocus = useIsFocused(null);

  useEffect(() => {
    if (isFocus) {
      getOngoingEvents();
    }
  }, [isFocus]);

  //************Get Ongoing Events**************
  const getOngoingEvents = async () => {
    //On get Ongoing event success
    const checkInternet = await checkConnected();
    if (checkInternet) {
      setisLoading(true);
      const onOngoingSuccess = res => {
        // console.log('Ongoing Events', res);
        console.log('Ongoing Event Success');
        setisLoading(false);
      };
      //On get Ongoing event failure
      const onOngoingFailure = res => {
        console.log('Ongoing Event Failed');
        setisLoading(false);
      };
      //Get Upcomig Events
      dispatch(get_ongoing_event_request(onOngoingSuccess, onOngoingFailure));
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  //***********On Press On Going Events***********
  const OnGoingEventPress = async item => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      //Set Ongoing Success
      setisLoading(true);

      const onGoingPressSuccess = res => {
        if (res?.current_user?.event_status == 'joined') {
          navigation.navigate('OngoingEventDetail');
        } else {
          navigation.navigate('EventDetail');
        }
        // console.log('On Going Event Success');
        setisLoading(false);
      };
      //Set  onGoing event failure
      const onGoingPressFailure = () => {
        // console.log('On Going Event Failure');
        Alert.alert('Error', 'Something went wrong!');
        setisLoading(false);
      };

      dispatch(
        set_event_request(item, onGoingPressSuccess, onGoingPressFailure),
      );
      dispatch(
        set_exercise_screen_request(false, () => {
          console.log('Event Screens');
        }),
      );
    } else {
      setisLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

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
                event_status={
                  item?.current_user?.status_event || item?.status_event
                }
                onPressCard={() => {
                  OnGoingEventPress(item);
                }}
              />
            );
          }}
        />
      </View>
      {isLoading && <Loader loading={isLoading} />}
    </SafeAreaView>
  );
};

export default OngoingEvent;
