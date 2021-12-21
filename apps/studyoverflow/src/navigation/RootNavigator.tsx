import React, { useMemo } from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { enableFreeze } from 'react-native-screens';

import AuthScreen from '../screens/AuthScreen';
import HomeNavigator from './HomeNavigator';
import { useAppSelector } from '../store/hooks';
import { useTheme } from 'styled-components/native';

enableFreeze(true);

const RootNavigator: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const theme = useTheme();

  const navigationTheme = useMemo<Theme>(
    () => ({
      colors: {
        background: theme.colors.background,
        card: theme.colors.white,
        text: theme.colors.black,
        border: theme.colors.white,
        notification: theme.colors.secondary,
        primary: theme.colors.primary,
      },
      dark: false,
    }),
    [theme]
  );

  if (!user) {
    return <AuthScreen />;
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
