import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import StepsDashboard from '../../screens/StepCounterTabs/StepsDashboard';

const Stack = createStackNavigator();

function StepsHomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="StepsDashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="StepsDashboard" component={StepsDashboard} />
    </Stack.Navigator>
  );
}

export default StepsHomeStack;
