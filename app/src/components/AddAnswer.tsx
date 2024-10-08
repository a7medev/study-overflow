import React from 'react';
import * as Yup from 'yup';
import Toast from 'react-native-simple-toast';
import type { FormikHelpers } from 'formik';

import Form from './form/Form';
import FormTextField from './form/TextField/FormTextField';
import SubmitButton from './form/Button/SubmitButton';
import FirebaseMessages from '../config/FirebaseMessages';

interface AddAnswerProps {
  questionId: string;
}

const initialValues = { content: '' };
type Values = typeof initialValues;

const validationSchema = Yup.object({
  content: Yup.string()
    .trim()
    .min(3, 'يجب ألا تقل على ٣ أحرف')
    .max(1000, 'يجب ألا تزيد عن ١٠٠٠ حرف')
    .required('هذا الحقل مطلوب'),
});

const AddAnswer: React.FC<AddAnswerProps> = ({ questionId }) => {
  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>,
  ) => {
    try {
      // TODO: add answer
    } catch (err) {
      Toast.show(FirebaseMessages.get(err, 'فشل إرسال الإجابة'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}>
      <FormTextField name="content" placeholder="اجابتك..." multiline />
      <SubmitButton>إرسال الإجابة</SubmitButton>
    </Form>
  );
};

export default AddAnswer;
