import NetInfo from '@react-native-community/netinfo';
import {createContext, useContext, useEffect} from 'react';
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
export const responseValidator = (response, errorMsg) => {
  let errorCode = response;
  const msg = errorMsg?.error[0];
  if (errorCode == 401) {
    return msg || 'Something went wrong!';
  } else if (errorCode == 400) {
    return msg || 'Something went wrong!';
  } else if (errorCode == 404) {
    return msg || 'Something went wrong!';
  } else if (errorCode == 500) {
    return msg || 'Something went wrong!';
  } else {
  }
};
