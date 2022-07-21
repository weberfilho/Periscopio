import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';
import { SignUp } from '../screens/SignUp';
import { Home } from '../screens/Home';
import { AppDrawerRoutes } from './app.drawer.routes';
import { AppTabRoutes } from './app.tab.routes';


const Stack = createNativeStackNavigator();


export function AuthStackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='Login'
        component={Login}
      />

      <Stack.Screen
        name='Cadastro'
        component={SignUp}
      />

      <Stack.Screen
        name='Home'
        component={AppDrawerRoutes}
      />


    </Stack.Navigator>
  );
}