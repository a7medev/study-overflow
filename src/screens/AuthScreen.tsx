import React from 'react';
import { StyleSheet } from 'react-native';
import Image from 'react-native-fast-image';
import * as Yup from 'yup';

import Screen from '../components/styled/Screen';
import Button from '../components/Button';
import Typo from '../components/styled/Typo';
import FormTextField from '../components/form/TextField/FormTextField';
import Form from '../components/form/Form';

const initialValues = { email: '', password: '' };
const validationSchema = Yup.object({
  email: Yup.string()
    .email('أدخل بريد إلكتروني صالح')
    .required('هذا الحقل مطلوب'),
  password: Yup.string()
    .min(6, 'يجب أن تكون على الأقل ٦ حروف')
    .required('هذا الحقل مطلوب'),
});

const AuthScreen: React.FC = () => {
  const handleSubmit = () => {
    // TODO: handle submit
  };

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

      <Form
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}>
        <FormTextField name="email" placeholder="البريد الإلكتروني" />
        <FormTextField
          name="password"
          placeholder="كلمة المرور"
          secureTextEntry
        />

        <Button fullWidth style={styles.signInButton}>
          تسجيل الدخول
        </Button>
        <Button variant="secondary" fullWidth>
          إنشاء حساب
        </Button>
      </Form>
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
