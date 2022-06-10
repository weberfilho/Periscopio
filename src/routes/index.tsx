import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthStackRoutes } from './auth.stack.routes';


export function Routes() {
  return (
    <NavigationContainer>
      <AuthStackRoutes />
    </NavigationContainer>
  );
}