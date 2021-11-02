import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import RootNavigator from './navigation/RootNavigator';
import theme from './config/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigator />
    </ThemeProvider>
  );
};

export default App;
