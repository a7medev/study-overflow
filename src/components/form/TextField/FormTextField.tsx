import React from 'react';
import { TextInputProps } from 'react-native';
import { useField } from 'formik';

import TextField from './TextField';
import FormError from '../FormError';
import FieldContainer from '../FieldContainer';

interface FormTextFieldProps extends TextInputProps {
  name: string;
}

const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  placeholderTextColor: _, // It makes a type error
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <FieldContainer>
      <TextField
        value={field.value}
        onBlur={() => helpers.setTouched(true)}
        onChangeText={text => helpers.setValue(text)}
        error={meta.touched && !!meta.error}
        {...props}
      />
      <FormError touched={meta.touched} error={meta.error} />
    </FieldContainer>
  );
};

export default FormTextField;
