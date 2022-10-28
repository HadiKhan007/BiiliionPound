import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import StepsSettingsTab from '../../screens/StepCounterTabs/StepsSettingsTab/StepsSettingsTab';

const Stack = createStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="StepsExerciseTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="StepsExerciseTab" component={StepsSettingsTab} />
    </Stack.Navigator>
  );
}

export default AuthStack;
