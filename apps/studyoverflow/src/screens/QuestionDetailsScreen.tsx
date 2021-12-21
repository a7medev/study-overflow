import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { QuestionsParamList } from '../navigation/QuestionsNavigator';
import Typo from '../components/styled/Typo';
import VoteButtons from '../components/VoteButtons';
import AddAnswer from '../components/AddAnswer';

const QuestionDetailsScreen: React.FC<
  NativeStackScreenProps<QuestionsParamList, 'QuestionDetails'>
> = ({ route }) => {
  const question = route.params;

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={30}
      contentContainerStyle={styles.screen}>
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

      <Typo variant="h3" style={styles.title}>
        الاجابات
      </Typo>

      <AddAnswer questionId={question.id} />
    </KeyboardAwareScrollView>
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
