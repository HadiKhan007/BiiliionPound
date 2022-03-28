import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Event from '../../screens/BottomTabs/EventTab';
import EventDetail from '../../screens/BottomTabs/EventTab/EventDetail';
import OngoingEvent from '../../screens/BottomTabs/EventTab/OngoingEvent/OngoingEvent';
import MilitaryPress from '../../screens/BottomTabs/EventTab/MilitaryPress';

const Stack = createStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Event"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Event" component={Event} />
      <Stack.Screen name="EventDetail" component={EventDetail} />
      <Stack.Screen name='OngoingEvent' component={OngoingEvent} />
      <Stack.Screen name='MilitaryPress' component={MilitaryPress} />
    </Stack.Navigator>
  );
}

export default AuthStack;
