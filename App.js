import React, {useEffect} from 'react';
import {StatusBar, Platform, LogBox} from 'react-native';
import MainNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import store, {persistor} from './src/redux/store';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {stripe_publishableKey, web_client_id} from './src/shared/exporter';
import {StripeProvider} from '@stripe/stripe-react-native';

// ignore warnings
LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  //Initialize Google Signin
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: web_client_id,
    });
  }, []);

  return (
    <StripeProvider
      publishableKey={stripe_publishableKey}
      merchantIdentifier="merchant.identifier">
      <Provider store={store}>
        <StatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <PersistGate persistor={persistor}>
          <MainNavigation />
        </PersistGate>
      </Provider>
    </StripeProvider>
  );
};

export default App;
