import React from 'react';
import { StyleSheet } from 'react-native';
import Image from 'react-native-fast-image';

import Screen from '../components/styled/Screen';
import Button from '../components/Button';
import TextField from '../components/form/TextField/TextField';
import Typo from '../components/styled/Typo';

const AuthScreen: React.FC = () => {
  return (
    <Screen style={styles.screen}>
      <Image
        resizeMode="contain"
        source={require('../assets/images/studying-girl.png')}
        style={styles.image}
      />

      <Typo variant="h1">مرحبًا بك!</Typo>
      <Typo variant="lead" style={styles.leadText}>
        انضم لمجتمع المذاكرة الخاص بنا
      </Typo>

      <TextField placeholder="البريد الإلكتروني" />
      <TextField
        placeholder="كلمة المرور"
        secureTextEntry
        style={styles.passwordField}
      />

      <Button fullWidth style={styles.signInButton}>
        تسجيل الدخول
      </Button>
      <Button variant="secondary" fullWidth>
        إنشاء حساب
      </Button>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 275,
    height: 150,
    marginBottom: 20,
  },
  leadText: {
    marginBottom: 30,
  },
  passwordField: {
    marginTop: 15,
    marginBottom: 25,
  },
  signInButton: {
    marginBottom: 15,
  },
});

export default AuthScreen;
