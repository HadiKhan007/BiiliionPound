import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../../screens/BottomTabs/ProfileTab';
const Stack = createStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default AuthStack;
