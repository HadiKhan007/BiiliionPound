import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ActivityStack from '../stacks/ActivityStack';
import EventStack from '../stacks/EventStack';
import ProfileStack from '../stacks/ProfileStack';
import HomeStack from '../stacks/HomeStack';
import {BottomTab} from '../../components';

const Tab = createBottomTabNavigator();

const MainFlow = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen component={HomeStack} name={'Home'} />
      <Tab.Screen component={ActivityStack} name={'Activity'} />
      <Tab.Screen component={EventStack} name={'Event'} />
      <Tab.Screen component={ProfileStack} name={'Profile'} />
    </Tab.Navigator>
  );
};

export default MainFlow;
