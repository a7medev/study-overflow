import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Icon from './Icon';
import Typo from './styled/Typo';

export interface VoteButtonsProps {
  votes: number;
  status?: 'up' | 'down';
  onUpvote: () => void;
  onDownvote: () => void;
}

const VoteButtons: React.FC<VoteButtonsProps> = ({
  votes,
  status,
  onUpvote,
  onDownvote,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onUpvote}
        accessibilityLabel="تصويت إيجابي"
        accessibilityState={{ selected: status === 'up' }}>
        <Icon
          name="caret-up"
          color={status === 'up' ? 'primary' : 'grayLight'}
        />
      </TouchableOpacity>

      <Typo accessibilityHint="عدد الأصوات">{votes}</Typo>

      <TouchableOpacity
        onPress={onDownvote}
        accessibilityLabel="تصويت سلبي"
        accessibilityState={{ selected: status === 'down' }}>
        <Icon
          name="caret-down"
          color={status === 'down' ? 'primary' : 'grayLight'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default VoteButtons;
