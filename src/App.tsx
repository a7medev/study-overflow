import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';

import RootNavigator from './navigation/RootNavigator';
import theme from './config/theme';
import store from './store';

const App: React.FC = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboardAvoidingView}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </ThemeProvider>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
});

export default App;
