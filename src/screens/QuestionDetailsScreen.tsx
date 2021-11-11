import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Typo from '../components/styled/Typo';
import { QuestionsParamList } from '../navigation/QuestionsNavigator';
import VoteButtons from '../components/VoteButtons';

const QuestionDetailsScreen: React.FC<
  NativeStackScreenProps<QuestionsParamList, 'QuestionDetails'>
> = ({ route }) => {
  const question = route.params;

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.header}>
        <VoteButtons
          votes={20}
          status="up"
          onUpvote={() => console.log('upvoted')}
          onDownvote={() => console.log('downvoted')}
        />
        <View style={styles.metadata}>
          <Typo variant="h2" style={styles.title}>
            {question.title}
          </Typo>
          <Typo color="gray" accessibilityHint="تاريخ النشر">
            ٢٠ أكتوبر ٢٠٢١
          </Typo>
        </View>
      </View>

      <Typo style={styles.content}>{question.content}</Typo>

      <Typo variant="h3">الاجابات</Typo>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  metadata: {
    marginStart: 10,
  },
  title: {
    marginBottom: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  content: {
    marginBottom: 20,
  },
});

export default QuestionDetailsScreen;
