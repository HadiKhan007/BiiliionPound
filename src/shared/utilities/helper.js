import NetInfo from '@react-native-community/netinfo';
import {createContext, useContext, useEffect} from 'react';
import {Alert} from 'react-native';
export const checkConnected = () => {
  return NetInfo.fetch().then(state => {
    return state.isConnected;
  });
};
const OnlineStatusContext = createContext(true);
export const OnlineStatusProvider = ({children}) => {
  const [isOffline, setOfflineStatus] = useState(false);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
    return () => removeNetInfoSubscription();
  }, []);
  return (
    <OnlineStatusContext.Provider value={isOffline}>
      {children}
    </OnlineStatusContext.Provider>
  );
};
export const useOnlineStatus = () => {
  const store = useContext(OnlineStatusContext);
  return store;
};
export const capitalizeFirstLetter = string => {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
};
export const responseValidator = response => {
  let errorCode = response;
  if (errorCode == 401) {
    Alert.alert(
      'Error',
      'Something went wrong!',
      [{text: 'Ok', onPress: () => console.log('Cancelled')}],
      {cancelable: false},
    );
  } else if (errorCode == 400) {
    Alert.alert(
      'Error',
      'Something went wrong!',
      [{text: 'Ok', onPress: () => console.log('Cancelled')}],
      {cancelable: false},
    );
  } else if (errorCode == 404) {
    Alert.alert(
      'Error',
      'Something went wrong!',
      [{text: 'Ok', onPress: () => console.log('Cancelled')}],
      {cancelable: false},
    );
  } else if (errorCode == 500) {
    Alert.alert(
      'Error',
      'Something went wrong!',
      [{text: 'Ok', onPress: () => console.log('Cancelled')}],
      {cancelable: false},
    );
  } else {
  }
};
