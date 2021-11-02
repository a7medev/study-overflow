import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';

import Typo from './styled/Typo';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  outlined?: boolean;
  fullWidth?: boolean;
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
  border-radius: 7px;
  align-items: center;
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  outlined,
  ...props
}) => {
  return (
    <ButtonBox variant={variant} outlined={outlined} {...props}>
      <Typo variant="button" color={outlined ? variant : 'white'}>
        {children}
      </Typo>
    </ButtonBox>
  );
};

export default Button;
