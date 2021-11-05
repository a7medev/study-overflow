import React from 'react';
import {
  ActivityIndicator,
  Platform,
  TouchableOpacityProps,
} from 'react-native';
import styled, { css } from 'styled-components/native';

import Typo from '../../styled/Typo';

export interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  outlined?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}

const ButtonBox = styled.TouchableOpacity<ButtonProps>`
  padding: 10px 20px;
  background-color: ${props =>
    props.outlined
      ? 'transparent'
      : props.theme.colors[props.variant || 'primary']};
  border: 2px solid
    ${props =>
      props.outlined
        ? props.theme.colors[props.variant || 'primary']
        : 'transparent'};
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
  opacity: ${props => (props.disabled && !props.loading ? 0.5 : 1)};
  border-radius: ${props => props.theme.borderRadii.medium}px;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  outlined,
  loading,
  ...props
}) => {
  const contrastColor = outlined ? variant : 'white';

  return (
    <ButtonBox
      variant={variant}
      outlined={outlined}
      loading={loading}
      disabled={loading}
      {...props}>
      {loading ? (
        <ActivityIndicator
          color={contrastColor}
          size={Platform.OS === 'ios' ? 'small' : 20}
        />
      ) : (
        <Typo variant="button" color={contrastColor}>
          {children}
        </Typo>
      )}
    </ButtonBox>
  );
};

export default Button;
