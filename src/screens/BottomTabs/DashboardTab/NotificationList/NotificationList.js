import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {
  AppHeader,
  DeleteItemModal,
  Loader,
  NotificationCard,
  ParaBox,
} from '../../../../components';
import {appIcons, checkConnected, colors} from '../../../../shared/exporter';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {
  delete_notification_request,
  get_notification_list_request,
  set_event_request,
} from '../../../../redux/actions';
import moment from 'moment';
const NotificationList = ({navigation}) => {
  const deleteModalRef = useRef(null);
  const dispatch = useDispatch(null);
  const [currentItem, setcurrentItem] = useState(null);
  const {all_notifications} = useSelector(state => state?.exercise);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    getNotifications();
  }, []);

  //Get Notification List
  const getNotifications = async () => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      setisLoading(true);
      const cbSuccess = () => {
        // console.log('Notification Retrieved');
        setisLoading(false);
      };
      const cbFailure = res => {
        setisLoading(false);
        Alert.alert('Failed', res);
      };
      dispatch(get_notification_list_request(null, cbSuccess, cbFailure));
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  //On Press Delete
  const onPressDelNotification = async () => {
    const checkInternet = await checkConnected();
    if (checkInternet) {
      setisLoading(true);
      const cbSuccess = () => {
        deleteModalRef?.current?.hide();
        setisLoading(false);
      };
      const cbFailure = () => {
        deleteModalRef?.current?.hide();
        console.log('Unable to Delete');
        setisLoading(false);
      };
      dispatch(
        delete_notification_request(currentItem?.id, cbSuccess, cbFailure),
      );
    } else {
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  const onPressCard = async item => {
    //set   event success
    setisLoading(true);
    const checkInternet = await checkConnected();
    const onPressSuccess = () => {
      navigation.navigate('EventDetail');
      console.log('On Event Success');
      setisLoading(false);
    };
    //set  event failure
    const onPressFailure = () => {
      console.log('On  Event Failure');
      setisLoading(false);
    };

    if (checkInternet) {
      dispatch(
        set_event_request(item?.event?.id, onPressSuccess, onPressFailure),
      );
    } else {
      setisLoading(false);
      Alert.alert('Error', 'Check your internet connectivity!');
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader icon={appIcons.backArrow} title={'Notification'} />
        <View style={styles.itemContainer}>
          <FlatList
            data={all_notifications}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <NotificationCard
                  profileImage={item?.event?.event_image_url}
                  title={item?.body}
                  event_name={item?.event?.title}
                  subtitle={`Last ${moment(item?.event?.start_date).fromNow()}`}
                  onPressThreeDots={() => {
                    setcurrentItem(item);
                    deleteModalRef?.current?.show();
                  }}
                  onPressCard={() => {
                    onPressCard(item);
                  }}
                />
              );
            }}
            ItemSeparatorComponent={() => {
              return <View style={styles.separator} />;
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>

      <DeleteItemModal
        show={deleteModalRef}
        onPressHide={() => {
          deleteModalRef?.current?.hide();
        }}
        onPressDelete={() => {
          onPressDelNotification();
        }}
        bgColor={colors.white}
        borderleftRadius={10}
        borderRightRadius={10}
      />
      <Loader loading={isLoading} />
    </SafeAreaView>
  );
};

export default NotificationList;
