import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../screens/Login';
import SignUp from '../../screens/Register';

const Stack = createStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default AuthStack;
