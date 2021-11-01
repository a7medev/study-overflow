import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from './config/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Text>Hello</Text>
    </ThemeProvider>
  );
};

export default App;
