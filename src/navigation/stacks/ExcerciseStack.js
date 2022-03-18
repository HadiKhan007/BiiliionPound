import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AddExcercise from '../../screens/BottomTabs/DashboardTab/AddExcercise';
import AddReps from '../../screens/BottomTabs/DashboardTab/AddReps';

const Stack = createStackNavigator();

function ExerciseStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="AddExcercise"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AddExercise" component={AddExcercise} />
      <Stack.Screen name="AddReps" component={AddReps} />
    </Stack.Navigator>
  );
}

export default ExerciseStack;
