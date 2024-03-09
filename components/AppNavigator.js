import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/Settings';
import Analytics from '../screens/Analytics';
import Notes from '../screens/Notes';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Analytics" component={Analytics} />
      <Stack.Screen name="Notes" component={Notes} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
