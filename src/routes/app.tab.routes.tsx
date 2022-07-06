import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { SignUp } from '../screens/SignUp';


const Tab = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Home'
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name='home-outline'
              size={24}
            />
          )
        }}

      />
      <Tab.Screen
        name='Home2'
        component={SignUp}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name='home-outline'
              size={24}
            />
          )
        }}

      />
    </Tab.Navigator>
  );
}