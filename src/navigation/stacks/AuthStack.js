import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../screens/AuthScreens/Login';
import SignUp from '../../screens/AuthScreens/Register';
import ForgotPassword from '../../screens/AuthScreens/ForgotPassword';
import ResetPassword from '../../screens/AuthScreens/ResetPassword';
import VerifyOtp from '../../screens/AuthScreens/VerifyOtp';
import SelectMode from '../../screens/AuthScreens/SelectMode/SelectMode';
import PersonalInfo from '../../screens/AuthScreens/PersonalInfo/PersonalInfo';

const Stack = createStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      <Stack.Screen name="SelectMode" component={SelectMode} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
    </Stack.Navigator>
  );
}

export default AuthStack;
