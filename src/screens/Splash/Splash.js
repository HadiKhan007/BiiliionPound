import React, {useEffect} from 'react';
import {Image, StatusBar, SafeAreaView, Alert} from 'react-native';
import styles from './styles';
import {appLogos} from '../../shared/theme/assets';
import {useDispatch, useSelector} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import {
  LocalNotification,
  Notification_Listner,
  registerAppWithFCM,
  requestPermission,
} from '../../shared/exporter';

const Splash = ({navigation}) => {
  const {walkthrough, userInfo} = useSelector(state => state.auth);
  const dispatch = useDispatch(null);
  useEffect(() => {
    handlerNotifications();
    handleAppEntry();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  const handlerNotifications = () => {
    //Register App with FCM
    registerAppWithFCM();
    //Request Permissions and get Token
    requestPermission();
    //Notification Listner
    Notification_Listner(dispatch, navigation);
  };
  const handleAppEntry = () => {
    setTimeout(() => {
      if (userInfo?.user == null) {
        if (walkthrough?.skip) {
          navigation.replace('Auth');
        } else {
          navigation.replace('GettingStarted');
        }
      } else {
        navigation.replace('App');
      }
    }, 2500);
  };
  return (
    <>
      <SafeAreaView style={styles.rootContainer}>
        <Image
          source={appLogos.appLogo}
          style={styles.imageStyles}
          resizeMode="contain"
        />
      </SafeAreaView>
    </>
  );
};

export default Splash;
