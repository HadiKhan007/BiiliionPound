import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../../screens/BottomTabs/DashboardTab';
const Stack = createStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Dasboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

export default AuthStack;
