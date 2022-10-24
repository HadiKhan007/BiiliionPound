import {
  Alert,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {HomeCircle, HomeHeader, Loader} from '../../../../components';
import {
  appIcons,
  capitalizeFirstLetter,
  checkConnected,
  colors,
  isSubscriptionActive,
  requestPermission,
} from '../../../../shared/exporter';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {
  get_lifted_weight_request,
  save_device_token,
  set_event_request,
  set_exercise_screen_request,
} from '../../../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const Dashboard = ({navigation}) => {
  const isFocus = useIsFocused(null);

  //Redux States
  const {userInfo} = useSelector(state => state?.auth);
  const {userData} = useSelector(state => state?.profile);
  const {lifted_weight} = useSelector(state => state?.exercise);
  const [isLoading, setisLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [subDisabled, setSubDisabled] = useState(false);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch(null);

  //Get Wieght Lifted
  useEffect(() => {
    if (isFocus) {
      checkSubscriptions();
      getAllRequest();
    }
  }, [isFocus]);

  const checkSubscriptions = async () => {
    setloading(true);
    try {
      const checkStatus = await isSubscriptionActive();
      console.log('checkStatus', checkStatus);
      if (checkStatus) {
        setloading(false);
        setDisabled(false);
        setSubDisabled(true);
      } else {
        setloading(false);
        setDisabled(true);
        setSubDisabled(false);
      }
      //update your subscription status here
    } catch (error) {}
  };

  const getAllRequest = async () => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      gettotalWeight();
      sendFCMToken();
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };
  //Get Lifted Weight
  const gettotalWeight = () => {
    setisLoading(true);
    //Get Lifted Weight Succees
    const getWeightSuccess = res => {
      console.log('Total Weight Lifted--', res);
      setisLoading(false);
    };
    //Get Lifted Weight Failure
    const getWeightFailure = res => {
      setisLoading(false);
      if (res) {
        Alert.alert('Error', res);
      }
    };
    dispatch(get_lifted_weight_request(getWeightSuccess, getWeightFailure));
  };
  // send fcm token to backend
  const sendFCMToken = async () => {
    const cbSuccess = () => {
      // console.log('FCM TOKEN SAVED');
    };
    const cbFailure = msg => {
      Alert.alert('Failed', msg);
      console.log('FCM TOKEN FAILED TO SAVE');
    };
    AsyncStorage.getItem('fcmToken').then(token => {
      if (requestPermission() != null) {
        const body = {
          token: token,
        };
        dispatch(save_device_token(body, cbSuccess, cbFailure));
      }
    });
  };

  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {},
      onNotification: function (notification) {
        let notificationObj = notification.data?.event_id;
        if (notificationObj) {
          notificationObj = JSON.parse(notificationObj);
          if (notification?.userInteraction) {
            const onEventPressSuccess = () => {
              navigation.navigate('EventDetail');
              console.log('On Event Event Success');
            };
            //set Event event failure
            const onEventPressFailure = () => {
              console.log('On Event Event Failure');
            };
            dispatch(
              set_event_request(
                notificationObj,
                onEventPressSuccess,
                onEventPressFailure,
              ),
            );
          }
        }

        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios' ? true : false,
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
    });
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <HomeHeader
          title={'Welcome Back'}
          subtitle={`${
            capitalizeFirstLetter(userData?.first_name || '') ||
            capitalizeFirstLetter(userInfo?.user?.first_name || '')
          } ${
            capitalizeFirstLetter(userData?.last_name || '') ||
            capitalizeFirstLetter(userInfo?.user?.last_name || '')
          }`}
          // icon={
          //   all_notifications?.message
          //     ? appIcons.notificationIcon
          //     : appIcons.notification
          // }
          icon={appIcons.notificationIcon}
          onPressBtn={() => {
            navigation?.navigate('NotificationList');
          }}
        />
        <View style={styles.itemView}>
          <HomeCircle
            disabled={disabled}
            icon={appIcons.plus}
            title={lifted_weight || 0}
            isLoading={isLoading}
            subtitle={'Total Pounds Lifted'}
            onPressAdd={() => {
              dispatch(
                set_exercise_screen_request(true, () => {
                  navigation?.navigate('ExerciseStack');
                }),
              );
            }}
          />
          {!subDisabled && (
            <TouchableOpacity
              disabled={subDisabled}
              onPress={() =>
                navigation.navigate('SubscriptionPlan', {
                  subscriptionPrice: '$50',
                })
              }
              activeOpacity={0.5}
              style={[
                styles.btnAlign,
                {backgroundColor: subDisabled ? colors?.lightGrey : colors?.p1},
              ]}>
              <Text style={styles.btnText}>
                {/* {!subDisabled ? 'Subscribe' : 'unsubscribe'} */}
                {'Subscribe'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {loading && <Loader loading={loading} />}
    </SafeAreaView>
  );
};

export default Dashboard;
