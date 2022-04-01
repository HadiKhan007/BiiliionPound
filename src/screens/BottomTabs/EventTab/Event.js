import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList, ScrollView, Alert} from 'react-native';
import styles from './styles';
import {
  AppHeader,
  BlankField,
  Loader,
  OngoingEventCard,
  PrimaryHeading,
  UpcomingEventCard,
} from '../../../components';
import {checkConnected, spacing} from '../../../shared/exporter';
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isFocus) {
      getUpcomingEvents();
      getOngoingEvents();
    }
  }, [isFocus]);

  //**********Get Upcoming Events***********
  const getUpcomingEvents = async () => {
    //On get upcoming event success
    setLoading(true);
    const checkInternet = await checkConnected();

    const onUpcomingSuccess = res => {
      console.log('Upcoming Events', res);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    //On get upcoming event failure
    const onUpcomingFailure = res => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    //Get Upcomig Events
    if (checkInternet) {
      dispatch(
        get_upcoming_event_request(onUpcomingSuccess, onUpcomingFailure),
      );
    } else {
      setLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  //************Get Ongoing Events**************
  const getOngoingEvents = async () => {
    //On get Ongoing event success
    setLoading(true);
    const checkInternet = await checkConnected();

    const onOngoingSuccess = res => {
      console.log('Ongoing Events', res);
      setLoading(false);
    };
    //On get Ongoing event failure
    const onOngoingFailure = res => {
      console.log(res);
      setLoading(false);
    };
    //Get Upcomig Events
    if (checkInternet) {
      dispatch(get_ongoing_event_request(onOngoingSuccess, onOngoingFailure));
    } else {
      setLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  //**********On Press On Upcoming Events**********
  const UpcomingEventPress = async item => {
    //set  upcoming event success
    setLoading(true);
    const checkInternet = await checkConnected();

    const onUpcomingPressSuccess = () => {
      navigation.navigate('EventDetail');
      console.log('On Upcoming Event Success');
      setLoading(false);
    };
    //set upcoming event failure
    const onUpcomingPressFailure = () => {
      console.log('On Upcoming Event Failure');
      setLoading(false);
    };

    if (checkInternet) {
      dispatch(
        set_upcoming_event_request(
          item,
          onUpcomingPressSuccess,
          onUpcomingPressFailure,
        ),
      );
    } else {
      setLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  //***********On Press On Going Events***********
  const OnGoingEventPress = async item => {
    //Set Ongoing Success
    setLoading(true);
    const checkInternet = await checkConnected();

    const onGoingPressSuccess = () => {
      navigation.navigate('OngoingEventDetail');
      // console.log('On Going Event Success');
      setLoading(false);
    };
    //Set  onGoing event failure
    const onGoingPressFailure = () => {
      // console.log('On Going Event Failure');
      Alert.alert('Error', 'Something went wrong!');
      setLoading(false);
    };

    if (checkInternet) {
      dispatch(
        set_ongoing_event_request(
          item,
          onGoingPressSuccess,
          onGoingPressFailure,
        ),
      );
    } else {
      setLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader title={'Event'} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.itemConatiner}>
          {ongoing_events?.length > 0 ? (
            <>
              <PrimaryHeading
                title={'Ongoing Events'}
                TouchableText={'See All'}
                onPress={() => navigation.navigate('OngoingEvent')}
              />
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
            </>
          ) : null}
          {ongoing_events?.length > 0 ? (
            <>
              <PrimaryHeading title={'Upcoming Events'} />
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
            </>
          ) : null}
        </ScrollView>
      </View>
      {loading && <Loader loading={loading} />}
    </SafeAreaView>
  );
};

export default Event;
