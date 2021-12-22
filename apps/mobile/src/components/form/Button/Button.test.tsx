import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import Button from './Button';
import theme from '../../../config/theme';

describe('Button', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>I'm Button</Button>
      </ThemeProvider>,
    );
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button onPress={onPress} testID="button">
          Press Me
        </Button>
      </ThemeProvider>,
    );

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(onPress).toBeCalledTimes(1);
  });

  it("doesn't call onPress when disabled", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button disabled onPress={onPress} testID="button">
          Press Me
        </Button>
      </ThemeProvider>,
    );

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(onPress).not.toBeCalled();
  });

  it("doesn't call onPress when loading", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button loading onPress={onPress} testID="button">
          Press Me
        </Button>
      </ThemeProvider>,
    );

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(onPress).not.toBeCalled();
  });
});
