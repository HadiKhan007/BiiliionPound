import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {

export const registerAppWithFCM = async () => {
  await messaging().registerDeviceForRemoteMessages();
};
export async function requestPermission() {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus == messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus == messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      let token = await getFcmToken();
      console.log('TOKEN', token);
      return token;
    }
  } catch (error) {
    // User has rejected permissions
    console.log('token permission rejected');
  }
}
const getFcmToken = async () => {
  let oldToken = await AsyncStorage.getItem('fcmToken');
  if (oldToken == null) {
    try {
      messaging()
        .hasPermission()
        .then(async enabled => {
          if (enabled) {
            let token = await messaging().getToken();
            console.log('Token', token);
            AsyncStorage.setItem('fcmToken', token);
          } else {
            messaging()
              .requestPermission()
              .then(() => {
                console.log('+++ PERMISSION REQUESTED +++++');
              })
              .catch(error => {
                console.log(' +++++ ERROR RP ++++ ' + error);
              });
          }
        })
        .catch(error => {
          console.log(' +++++ ERROR +++++ ' + error);
        });
    } catch (err) {
      console.log(err);
    }
  } else {
    return oldToken;
  }
};

export const Notification_Listner = (dispatch, props) => {
  messaging().onNotificationOpenedApp(async remoteMessage => {
    console.log(remoteMessage);
  });
  messaging().onMessage(async remoteMessage => {
    console.log(remoteMessage);
  });
  messaging().getInitialNotification(async remoteMessage => {
    if (remoteMessage) {
      console.log('Initial Notification', remoteMessage.notification);
    }
  });
};

export const LocalNotification = () => {
  PushNotification.configure({
    // (required) Called when a remote or local notification is opened or received
    onNotification: notification => {
      console.log(notification);
    },
    popInitialNotification: true,
    requestPermissions: true,
  });
};
