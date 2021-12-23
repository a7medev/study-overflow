import styled, { css, DefaultTheme } from 'styled-components/native';

export const TypoVariants = {
  body: css(props => ({
    fontSize: 18,
    fontFamily: props.theme.fonts.regular,
  })),
  h1: css(props => ({
    fontSize: 30,
    fontFamily: props.theme.fonts.bold,
  })),
  h2: css(props => ({
    fontSize: 24,
    fontFamily: props.theme.fonts.bold,
  })),
  h3: css(props => ({
    fontSize: 20,
    fontFamily: props.theme.fonts.bold,
  })),
  lead: css(props => ({
    fontSize: 20,
    fontFamily: props.theme.fonts.regular,
  })),
  button: css(props => ({
    fontSize: 18,
    fontFamily: props.theme.fonts.regular,
  })),
  small: css(props => ({
    fontSize: 14,
    fontFamily: props.theme.fonts.regular,
  })),
};

export interface TypoProps {
  variant?: keyof typeof TypoVariants;
  color?: keyof DefaultTheme['colors'];
}

const Typo = styled.Text<TypoProps>(props => ({
  textAlign: 'left',
  color: props.theme.colors[props.color || 'black'],

  // Variant
  ...TypoVariants[props.variant || 'body'],
}));

export default Typo;
