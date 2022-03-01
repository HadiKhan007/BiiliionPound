import React, {useEffect} from 'react';
import {StatusBar, Platform, LogBox} from 'react-native';
import MainNavigation from '_navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import store, {persistor} from '_redux/store';
// import SplashScreen from 'react-native-splash-screen';
// import {Settings} from 'react-native-fbsdk-next';

const App = ({params}) => {
  useEffect(() => {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
  }, []);
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <Provider store={store}>
      <StatusBar
        hidden={false}
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <PersistGate persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
