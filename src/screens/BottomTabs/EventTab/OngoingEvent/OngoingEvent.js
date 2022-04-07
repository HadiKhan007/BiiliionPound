import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
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
import {set_ongoing_event_request} from '../../../../redux/actions';

const OngoingEvent = ({navigation}) => {
  const {ongoing_events} = useSelector(state => state?.event);
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch(null);
  //***********On Press On Going Events***********
  const OnGoingEventPress = async item => {
    //Set Ongoing Success
    setisLoading(true);
    const checkInternet = await checkConnected();

    const onGoingPressSuccess = () => {
      navigation.navigate('OngoingEventDetail');
      // console.log('On Going Event Success');
      setisLoading(false);
    };
    //Set  onGoing event failure
    const onGoingPressFailure = () => {
      // console.log('On Going Event Failure');
      Alert.alert('Error', 'Something went wrong!');
      setisLoading(false);
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
