import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import Walkthrough from '../screens/Walkthrough';
import AuthStack from '../navigation/stacks/AuthStack';
import Dashboard from './BottomTabs';
import SubscriptionPlan from '../screens/SubscriptionPlan';
import GettingStarted from '../screens/GettingStarted';
import ExerciseStack from './stacks/ExcerciseStack';
import Terms from '../screens/Terms/Terms';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import Faqs from '../screens/Faqs';
import EditProfile from '../screens/BottomTabs/ProfileTab/EditProfile';
import NotificationList from '../screens/BottomTabs/DashboardTab/NotificationList';
import EventDetail from '../screens/BottomTabs/EventTab/EventDetail';
import Payment from '../screens/BottomTabs/EventTab/Payment';
import OngoingEventDetail from '../screens/BottomTabs/EventTab/OngoingEventDetail';
import ActivityTab from '../screens/BottomTabs/EventTab/ActivityTab';
import VideoIntro from '../screens/VideoIntro/VideoIntro';

// V2 stack
import StepsMainFlow from './StepsBottomTabs/index';
import ModeStack from './stacks/ModeStack';
import HistoryScreen from '../screens/StepCounterTabs/StepsSettingsTab/HistoryScreen';
import StepCount from '../screens/StepCounterTabs/StepCount';

const AppStack = createStackNavigator();

const MainAppNav = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'Splash'} component={Splash} />
        <AppStack.Screen name={'Walkthrough'} component={Walkthrough} />
        <AppStack.Screen name={'VideoIntro'} component={VideoIntro} />
        <AppStack.Screen name={'GettingStarted'} component={GettingStarted} />
        <AppStack.Screen name="Terms" component={Terms} />
        <AppStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <AppStack.Screen name="EditProfile" component={EditProfile} />
        <AppStack.Screen name="Faqs" component={Faqs} />
        <AppStack.Screen name="NotificationList" component={NotificationList} />
        <AppStack.Screen name={'Auth'} component={AuthStack} />
        <AppStack.Screen name={'App'} component={Dashboard} />
        <AppStack.Screen name={'ExerciseStack'} component={ExerciseStack} />
        <AppStack.Screen name={'EventDetail'} component={EventDetail} />
        <AppStack.Screen name={'Payment'} component={Payment} />
        <AppStack.Screen name="SubscriptionPlan" component={SubscriptionPlan} />
        <AppStack.Screen
          name="OngoingEventDetail"
          component={OngoingEventDetail}
        />
        <AppStack.Screen name="ActivityTab" component={ActivityTab} />
        {/* V2 Mode Stack */}
        <AppStack.Screen name="ModeStack" component={ModeStack} />
        {/* V2 Steps Counter Stack */}
        <AppStack.Screen name="StepsMainFlow" component={StepsMainFlow} />
        <AppStack.Screen name="HistoryScreen" component={HistoryScreen} />
        <AppStack.Screen name="StepCount" component={StepCount} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
