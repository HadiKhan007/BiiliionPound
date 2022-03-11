import React from 'react';
import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ActivityStack from '../stacks/ActivityStack';
import EventStack from '../stacks/EventStack';
import ProfileStack from '../stacks/ProfileStack';
import HomeStack from '../stacks/HomeStack';

import {appIcons, colors, HP, WP} from '../../shared/exporter';
import styles from './styles';
import {BottomTab} from '../../components';

const Tab = createBottomTabNavigator();
const MainFlow = ({params}) => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTab {...props} />}
      // screenOptions={{
      //   activeTintColor: colors.p1,
      //   showLabel: false,
      //   headerShown: false,
      //   tabBarActiveTintColor: colors.p1,
      //   tabBarInactiveTintColor: colors.g1,
      //   tabBarLabelStyle: styles.textStyle,
      //   tabBarStyle: styles.container,
      // }}
    >
      <Tab.Screen
        component={HomeStack}
        name={'Home'}
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({focused}) => (
        //     <View style={{marginTop: 10}}>
        //       <Image
        //         style={[
        //           styles.homeImageStyle,
        //           {tintColor: focused ? colors.p1 : colors.g1},
        //         ]}
        //         source={appIcons.home}
        //       />
        //     </View>
        //   ),
        // }}
      />
      <Tab.Screen
        component={ActivityStack}
        name={'Activity'}
        // options={{
        //   tabBarLabel: 'Activity',
        //   tabBarIcon: ({color, focused}) => (
        //     <View style={{marginTop: 10}}>
        //       <Image
        //         style={[
        //           styles.activityImageStyle,
        //           {tintColor: focused ? colors.p1 : colors.g1},
        //         ]}
        //         source={appIcons.event}
        //       />
        //     </View>
        //   ),
        // }}
      />
      <Tab.Screen
        component={EventStack}
        name={'Event'}
        // options={{
        //   tabBarLabel: 'Event',
        //   tabBarIcon: ({color, focused}) => (
        //     <View style={{marginTop: 10}}>
        //       <Image
        //         style={[
        //           styles.eventImageStyle,
        //           {tintColor: focused ? colors.p1 : colors.g1},
        //         ]}
        //         source={appIcons.board}
        //       />
        //     </View>
        //   ),
        // }}
      />
      <Tab.Screen
        component={ProfileStack}
        name={'Profile'}
        // options={{
        //   tabBarLabel: 'Profile',
        //   tabBarIcon: ({color, focused}) => (
        //     <View style={{marginTop: 10}}>
        //       <Image
        //         style={[
        //           styles.profileImageStyle,
        //           ,
        //           {tintColor: focused ? colors.p1 : colors.g1},
        //         ]}
        //         source={appIcons.profile}
        //       />
        //     </View>
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
};

export default MainFlow;
