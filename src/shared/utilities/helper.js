import NetInfo from '@react-native-community/netinfo';
import {createContext, useContext, useEffect} from 'react';
import {appIcons} from '../exporter';
import moment from 'moment';

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
  if (errorCode == 401) {
    if (errorMsg?.error) {
      const msg = errorMsg?.error[0];
      return msg;
    } else {
      return 'Something went wrong!';
    }
  } else if (errorCode == 400) {
    if (errorMsg?.error) {
      const msg = errorMsg?.error[0];
      return msg;
    } else {
      return 'Something went wrong!';
    }
  } else if (errorCode == 404) {
    if (errorMsg?.error) {
      const msg = errorMsg?.error[0];
      return msg;
    } else {
      return 'Something went wrong!';
    }
  } else if (errorCode == 500) {
    if (errorMsg?.error) {
      const msg = errorMsg?.error[0];
      return msg;
    } else {
      return 'Internal Server Error Please Try Again!';
    }
  } else {
  }
};

export const checkBrand = name => {
  if (name == 'Visa') {
    return appIcons.blueBg;
  } else if (name == 'Master') {
    return appIcons.orangeBg;
  }
};

export const calculateDateDiff = date => {
  const diff_date = moment(date).diff(moment(new Date()), 'days');
  if (diff_date < 0) {
    return 0;
  }
  return diff_date;
};
