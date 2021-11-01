import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import Typo from './components/styled/Typo';
import theme from './config/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typo>مراحب</Typo>
    </ThemeProvider>
  );
};

export default App;
