import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';

import QuestionsNavigator from './QuestionsNavigator';

export type HomeParamList = {
  Questions: undefined;
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
        name="Questions"
        component={QuestionsNavigator}
        options={{
          tabBarLabel: 'الأسئلة',
          tabBarIcon: props => (
            <Ionicons {...props} name={icon('albums', props)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
