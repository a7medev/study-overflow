import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import QuestionsFeedScreen from '../screens/QuestionsFeedScreen';
import QuestionDetailsScreen from '../screens/QuestionDetailsScreen';
import { Question } from '../types/Question';
import { useTheme } from 'styled-components/native';

export type QuestionsParamList = {
  QuestionsFeed: undefined;
  QuestionDetails: Question;
};

const Stack = createNativeStackNavigator();

const QuestionsNavigator: React.FC = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'رجوع',
        headerTitleStyle: { fontFamily: theme.fonts.bold },
        headerBackTitleStyle: { fontFamily: theme.fonts.regular },
      }}>
      <Stack.Screen
        name="QuestionsFeed"
        component={QuestionsFeedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuestionDetails"
        component={QuestionDetailsScreen}
        options={({ route }) => ({
          headerTitle: (route.params as Question).title,
        })}
      />
    </Stack.Navigator>
  );
};

export default QuestionsNavigator;
