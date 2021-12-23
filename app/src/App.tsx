import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';

import RootNavigator from './navigation/RootNavigator';
import theme from './config/theme';
import store from './store';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
