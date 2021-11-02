import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthScreen from '../screens/AuthScreen';
import HomeNavigator from './HomeNavigator';

const RootNavigator: React.FC = () => {
  const isSignedIn = false; // TODO: make it dynamic

  if (!isSignedIn) {
    return <AuthScreen />;
  }

  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
