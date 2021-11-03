import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthScreen from '../screens/AuthScreen';
import HomeNavigator from './HomeNavigator';
import useWatchAuthState from '../hooks/useWatchAuthState';
import { useAppSelector } from '../store/hooks';

const RootNavigator: React.FC = () => {
  const user = useAppSelector(state => state.auth.user);

  useWatchAuthState();

  if (!user) {
    return <AuthScreen />;
  }

  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
