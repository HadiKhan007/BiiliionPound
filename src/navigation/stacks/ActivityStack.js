import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Activity from '../../screens/BottomTabs/ActivityTab';
const Stack = createStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Activity"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Activity" component={Activity} />
    </Stack.Navigator>
  );
}

export default AuthStack;
