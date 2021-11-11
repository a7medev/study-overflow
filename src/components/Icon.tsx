import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DefaultTheme, useTheme } from 'styled-components/native';

const IconSizes = {
  sm: 16,
  md: 32,
  lg: 64,
};

interface IconProps {
  name: string;
  size?: keyof typeof IconSizes;
  color?: keyof DefaultTheme['colors'];
}

const Icon: React.FC<IconProps> = ({
  name,
  color = 'primary',
  size = 'md',
}) => {
  const { colors } = useTheme();

  return <Ionicons name={name} color={colors[color]} size={IconSizes[size]} />;
};

export default Icon;
