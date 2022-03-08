import React from 'react';
import {StatusBar, Platform, LogBox} from 'react-native';
import MainNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import store, {persistor} from './src/redux/store';

// ignore warnings
LogBox.ignoreAllLogs();

const App = () => {
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
