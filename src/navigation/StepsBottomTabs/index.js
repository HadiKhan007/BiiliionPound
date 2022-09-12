import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StepsBottomTab} from '../../components';

import StepsDashboard from '../../screens/StepCounterTabs/StepsDashboard';
import StepsActivity from '../../screens/StepCounterTabs/StepsActivityTab';
import StepsExerciseTab from '../../screens/StepCounterTabs/StepsExerciseTab';
import StepsSettingsTab from '../../screens/StepCounterTabs/StepsSettingsTab';

const Tab = createBottomTabNavigator();

const StepsMainFlow = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <StepsBottomTab {...props} />}>
      <Tab.Screen component={StepsDashboard} name={'Home'} />
      <Tab.Screen component={StepsActivity} name={'Activity'} />
      <Tab.Screen component={StepsExerciseTab} name={'Exercise'} />
      <Tab.Screen component={StepsSettingsTab} name={'Settings'} />
    </Tab.Navigator>
  );
};

export default StepsMainFlow;
