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

export const checkExerciseItemOrder = item => {
  console.log(item);
};

export const calculateDateDiff = date => {
  const diff_date = moment(date).diff(moment(new Date()), 'days');
  return diff_date;
};
export const calculateCurrentDateDiff = date => {
  const diff_date = moment(date).diff(moment(new Date()), 'minutes');
  if (diff_date > 1440) {
    return calculateDateDiff(date) > 1
      ? `${calculateDateDiff(date)} Days`
      : `${calculateDateDiff(date)} Day`;
  } else if (diff_date > 60 && diff_date <= 1440) {
    const diff_hours = moment(date).diff(moment(new Date()), 'hours');
    return `${diff_hours} hours`;
  } else if (diff_date <= 60 && diff_date >= 0) {
    return diff_date > 1 ? `${diff_date} minutes` : 'few seconds left';
  }
  return 0;
};

export function convertNumberSystem(value) {
  // Nine Zeroes for Billions
  return Math.abs(value) >= 1.0e9
    ? Math.abs(value) / 1.0e9 + 'B'
    : // Six Zeroes for Millions
    Math.abs(value) >= 1.0e6
    ? Math.abs(value) / 1.0e6 + 'M'
    : // Three Zeroes for Thousands
    Math.abs(value) >= 1.0e3
    ? Math.abs(value) / 1.0e3 + 'K'
    : Math.abs(value);
}
