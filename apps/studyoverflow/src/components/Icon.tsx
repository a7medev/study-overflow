import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type { IconProps as IoniconsProps } from 'react-native-vector-icons/Icon';

import { DefaultTheme, useTheme } from 'styled-components/native';

const IconSizes = {
  sm: 24,
  md: 32,
  lg: 64,
};

interface IconProps extends Omit<IoniconsProps, 'size'> {
  size?: keyof typeof IconSizes;
  color?: keyof DefaultTheme['colors'];
}

const Icon: React.FC<IconProps> = ({
  color = 'primary',
  size = 'md',
  ...props
}) => {
  const { colors } = useTheme();

  return <Ionicons color={colors[color]} size={IconSizes[size]} {...props} />;
};

export default Icon;
