import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import QuestionsFeedScreen from '../screens/QuestionsFeedScreen';
import { Question } from '../types/Question';

export type QuestionsParamList = {
  QuestionsFeed: undefined;
  QuestionDetails: Question;
};

const Stack = createNativeStackNavigator();

const QuestionsNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="QuestionsFeed" component={QuestionsFeedScreen} />
    </Stack.Navigator>
  );
};

export default QuestionsNavigator;
