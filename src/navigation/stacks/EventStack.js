import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Event from '../../screens/BottomTabs/EventTab';
import OngoingEvent from '../../screens/BottomTabs/EventTab/OngoingEvent/OngoingEvent';

const Stack = createStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Event"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Event" component={Event} />
      <Stack.Screen name="OngoingEvent" component={OngoingEvent} />
    </Stack.Navigator>
  );
}

export default AuthStack;
