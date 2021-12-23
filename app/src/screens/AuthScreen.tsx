import React, { useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
} from 'react-native';
import Image from 'react-native-fast-image';
import Toast from 'react-native-simple-toast';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/styled/Screen';
import Typo from '../components/styled/Typo';
import FormTextField from '../components/form/TextField/FormTextField';
import SubmitButton from '../components/form/Button/SubmitButton';
import FirebaseMessages from '../config/FirebaseMessages';

const initialValues = { email: '', password: '' };
type Values = typeof initialValues;

const validationSchema = Yup.object({
  email: Yup.string()
    .email('أدخل بريد إلكتروني صالح')
    .required('هذا الحقل مطلوب'),
  password: Yup.string()
    .min(6, 'يجب ألا تقل عن ٦ أحرف')
    .required('هذا الحقل مطلوب'),
});

const AuthScreen: React.FC = () => {
  const [authType, setAuthType] = useState<'login' | 'register'>('login');
  const passwordField = useRef<TextInput>(null);

  const handleSubmit = async (
    data: Values,
    { setSubmitting }: FormikHelpers<Values>,
  ) => {
    try {
      if (authType === 'login') {
        // TODO: Sign in
      } else {
        // TODO: Register
      }
    } catch (err) {
      Toast.show(FirebaseMessages.get(err));
      setSubmitting(false);
    }
  };

  return (
    <Screen style={styles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.fullHeight}>
        <Image
          resizeMode="contain"
          source={require('../assets/images/studying-girl.png')}
          style={styles.image}
        />

        <Typo variant="h1">مرحبًا بك!</Typo>
        <Typo variant="lead" style={styles.leadText}>
          انضم لمجتمع المذاكرة الخاص بنا
        </Typo>

        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}>
          {({ isSubmitting }) => (
            <>
              <FormTextField
                name="email"
                placeholder="البريد الإلكتروني"
                keyboardType="email-address"
                autoCompleteType="email"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => passwordField.current?.focus()}
              />
              <FormTextField
                name="password"
                placeholder="كلمة المرور"
                secureTextEntry
                autoCompleteType="password"
                ref={passwordField}
              />

              <SubmitButton
                onPress={() => setAuthType('login')}
                fullWidth
                loading={isSubmitting && authType === 'login'}
                disabled={isSubmitting}
                style={styles.signInButton}>
                تسجيل الدخول
              </SubmitButton>
              <SubmitButton
                onPress={() => setAuthType('register')}
                variant="secondary"
                loading={isSubmitting && authType === 'register'}
                disabled={isSubmitting}
                fullWidth>
                إنشاء حساب
              </SubmitButton>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullHeight: {
    flex: 1,
  },
  image: {
    width: 275,
    height: 150,
    marginBottom: 20,
  },
  leadText: {
    marginBottom: 30,
  },
  signInButton: {
    marginBottom: 15,
  },
});

export default AuthScreen;
