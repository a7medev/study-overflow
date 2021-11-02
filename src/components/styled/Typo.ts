import styled, { css, DefaultTheme } from 'styled-components/native';

export const TypoVariants = {
  body: css`
    font-size: 18px;
    font-family: ${props => props.theme.fonts.regular};
  `,
  h1: css`
    font-size: 30px;
    font-family: ${props => props.theme.fonts.bold};
  `,
  h2: css`
    font-size: 24px;
    font-family: ${props => props.theme.fonts.bold};
  `,
  h3: css`
    font-size: 20px;
    font-family: ${props => props.theme.fonts.bold};
  `,
  lead: css`
    font-size: 20px;
    font-family: ${props => props.theme.fonts.regular};
  `,
  button: css`
    font-size: 18px;
    font-family: ${props => props.theme.fonts.regular};
  `,
  small: css`
    font-size: 14px;
    font-family: ${props => props.theme.fonts.regular};
  `,
};

export interface TypoProps {
  variant?: keyof typeof TypoVariants;
  color?: keyof DefaultTheme['colors'];
}

const Typo = styled.Text<TypoProps>`
  text-align: left;
  color: ${props => props.theme.colors[props.color || 'black']};

  /* Variants */
  ${props => TypoVariants[props.variant || 'body']}
`;

export default Typo;
