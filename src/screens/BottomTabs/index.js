import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import Dashboard from './Dashboard';
import Profile from './ProfileTab';
import Order from './OrderTab';
import {colors} from '../../shared/exporter';
import LinksScreen from '../../navigation/StoryBookLinkSrc';

const Tab = createBottomTabNavigator();

const MainFlow = ({params}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: colors.p1,
        showLabel: false,
      }}>
      <Tab.Screen
        component={Dashboard}
        name={'Home'}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} type={'antdesign'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={Order}
        name={'Order'}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="reorder"
              color={color}
              type={'font-awesome'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        component={Profile}
        name={'Profile'}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} type={'antdesign'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={LinksScreen}
        name={'Link'}
        options={{
          tabBarLabel: 'StoryBook',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="donut-small"
              color={color}
              type={'material-icon'}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainFlow;
