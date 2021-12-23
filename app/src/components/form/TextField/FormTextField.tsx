import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useField } from 'formik';

import TextField from './TextField';
import FormError from '../FormError';
import FieldContainer from '../FieldContainer';

interface FormTextFieldProps extends TextInputProps {
  name: string;
}

const FormTextField = React.forwardRef<TextInput, FormTextFieldProps>(
  (
    {
      name,
      placeholderTextColor: _, // It makes a type error
      ...props
    },
    ref,
  ) => {
    const [field, meta, helpers] = useField(name);

    return (
      <FieldContainer>
        <TextField
          value={field.value}
          onBlur={() => helpers.setTouched(true)}
          onChangeText={text => helpers.setValue(text)}
          error={meta.touched && !!meta.error}
          ref={ref}
          {...props}
        />
        <FormError touched={meta.touched} error={meta.error} />
      </FieldContainer>
    );
  },
);

export default FormTextField;
