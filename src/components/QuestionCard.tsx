import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Card from './styled/Card';
import Typo from './styled/Typo';
import { Question } from '../types/Question';
import { useTheme } from 'styled-components/native';

export interface IconWithCountProps {
  icon: string;
  count: number;
  label?: string;
}

const IconWithCount: React.FC<IconWithCountProps> = ({
  icon,
  count,
  label,
}) => {
  const theme = useTheme();

  return (
    <View style={styles.iconWithCount}>
      <Ionicons
        name={icon}
        size={25}
        color={theme.colors.secondary}
        style={styles.icon}
        accessibilityLabel={label}
      />
      <Typo variant="small" color="secondary">
        {count}
      </Typo>
    </View>
  );
};

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  return (
    <Card style={styles.card}>
      <Typo variant="h3" style={styles.space}>
        {question.title}
      </Typo>
      <Typo color="primary" numberOfLines={3} style={styles.space}>
        {question.content}
      </Typo>

      <View style={styles.icons}>
        <IconWithCount
          icon="caret-up"
          count={question.votes}
          label="عدد الأصوات"
        />
        <IconWithCount
          icon="flame"
          count={question.views}
          label="عدد المشاهدات"
        />
        <IconWithCount
          icon="chatbubbles"
          count={question.answersCount}
          label="عدد الإجابات"
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
  },
  space: {
    marginBottom: 5,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWithCount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginEnd: 10,
  },
  icon: {
    marginEnd: 3,
  },
});

export default QuestionCard;
