import React, {useEffect} from 'react';
import {Image, StatusBar, SafeAreaView, Alert} from 'react-native';
import styles from './styles';
import {appLogos} from '../../shared/theme/assets';
import {useDispatch, useSelector} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Notification_Listner,
  registerAppWithFCM,
  requestPermission,
} from '../../shared/exporter';

const Splash = ({navigation}) => {
  const {userWithMode} = useSelector(state => state.auth);
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

  const handleAppEntry = async () => {
    const isRemember = await AsyncStorage.getItem('isRemember');
    const skip = await AsyncStorage.getItem('walkthrough');
    setTimeout(() => {
      if (isRemember === 'true') {
        navigation.replace('App');
        // if (
        //   userWithMode?.personal_information === 'created' &&
        //   userWithMode?.user?.mode === 'pedometer'
        // ) {
        //   navigation.replace('StepsMainFlow');
        // } else if (
        //   userWithMode?.user?.mode === 'pedometer' &&
        //   userWithMode?.personal_information === 'not created'
        // ) {
        //   navigation?.replace('ModeStack');
        // } else {
        //   navigation.replace('App');
        // }
      } else {
        if (skip == 'true') {
          navigation.replace('Auth');
        } else {
          navigation.replace('GettingStarted');
        }
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
