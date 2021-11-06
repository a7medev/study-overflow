import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';

import HomeScreen from '../screens/HomeScreen';

export type HomeParamList = {
  Home: undefined;
};

const Tab = createBottomTabNavigator<HomeParamList>();

const icon = (name: string, props: { focused: boolean }) =>
  props.focused ? name : `${name}-outline`;

const HomeNavigator: React.FC = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular,
          fontSize: 14,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'الرئيسية',
          tabBarIcon: props => (
            <Ionicons {...props} name={icon('home', props)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
