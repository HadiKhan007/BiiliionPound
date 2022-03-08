import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Splash from '../screens/Splash';
import Walkthrough from '../screens/Walkthrough';
import AuthStack from '../navigation/stacks/AuthStack';
import Dashboard from '../screens/BottomTabs';

const AppStack = createStackNavigator();

const MainAppNav = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'Splash'} component={Splash} />
        <AppStack.Screen name={'Walkthrough'} component={Walkthrough} />
        <AppStack.Screen name={'Auth'} component={AuthStack} />
        <AppStack.Screen name={'App'} component={Dashboard} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
