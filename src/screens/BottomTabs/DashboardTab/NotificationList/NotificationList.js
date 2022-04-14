import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {
  AppHeader,
  DeleteItemModal,
  NotificationCard,
  ParaBox,
} from '../../../../components';
import {appIcons, colors} from '../../../../shared/exporter';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {
  delete_notification_request,
  get_notification_list_request,
} from '../../../../redux/actions';
const data = [
  {
    id: 1,
    profileImage: 'https://unsplash.it/400/400?image=1',
    title: 'Hey, it’s time for lunch',
    subtitle: 'About 3m ago',
  },
  {
    id: 2,
    profileImage: 'https://unsplash.it/400/400?image=1',
    title: 'Hey, it’s time for lunch',
    subtitle: 'About 3m ago',
  },
  {
    id: 3,
    profileImage: 'https://unsplash.it/400/400?image=1',
    title: 'Hey, it’s time for lunch',
    subtitle: 'About 3m ago',
  },
  {
    id: 4,
    profileImage: 'https://unsplash.it/400/400?image=1',
    title: 'Hey, it’s time for lunch',
    subtitle: 'About 3m ago',
  },
];
const NotificationList = () => {
  const deleteModalRef = useRef(null);
  const dispatch = useDispatch(null);
  const [currentItem, setcurrentItem] = useState(null);
  const {all_notifications} = useSelector(state => state?.exercise);
  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = () => {
    const cbSuccess = () => {};
    const cbFailure = () => {};

    dispatch(get_notification_list_request(data, cbSuccess, cbFailure));
  };
  const onPressDelNotification = () => {
    const cbSuccess = () => {
      deleteModalRef?.current?.hide();
    };
    const cbFailure = () => {
      deleteModalRef?.current?.hide();
      console.log('Unable to Delete');
    };
    dispatch(
      delete_notification_request(currentItem?.id, cbSuccess, cbFailure),
    );
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.contentContainer}>
        <AppHeader icon={appIcons.backArrow} title={'Notification'} />
        <View style={styles.itemContainer}>
          <FlatList
            data={all_notifications}
            renderItem={({item}) => {
              return (
                <NotificationCard
                  profileImage={item?.profileImage}
                  title={item?.title}
                  subtitle={item?.subtitle}
                  onPressThreeDots={() => {
                    setcurrentItem(item);
                    deleteModalRef?.current?.show();
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
    </SafeAreaView>
  );
};

export default NotificationList;
