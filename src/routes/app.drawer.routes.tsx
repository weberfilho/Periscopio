import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { AppTabRoutes } from './app.tab.routes';
import { Home } from '../screens/Home';

const Drawer = createDrawerNavigator();

export function AppDrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle:"",
        headerTransparent: true
      }}
    >
      <Drawer.Screen name='Sugerir Estabelecimento' component={AppTabRoutes} />
      <Drawer.Screen name='Sugerir Evento' component={Home} />

    </Drawer.Navigator>
  );
}