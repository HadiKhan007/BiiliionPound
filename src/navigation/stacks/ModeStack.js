import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SelectMode from '../../screens/AuthScreens/SelectMode/SelectMode';
import PersonalInfo from '../../screens/AuthScreens/PersonalInfo/PersonalInfo';

const Stack = createStackNavigator();

function ModeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="SelectMode"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SelectMode" component={SelectMode} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
    </Stack.Navigator>
  );
}

export default ModeStack;
