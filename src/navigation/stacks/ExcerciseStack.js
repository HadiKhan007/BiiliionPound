import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AddExcercise from '../../screens/BottomTabs/DashboardTab/AddExcercise';

const Stack = createStackNavigator();

function ExerciseStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="AddExcercise"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AddExercise" component={AddExcercise} />
    </Stack.Navigator>
  );
}

export default ExerciseStack;
