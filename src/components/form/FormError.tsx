import React from 'react';
import Typo from '../styled/Typo';

interface FormErrorProps {
  touched?: boolean;
  error?: string;
}

const FormError: React.FC<FormErrorProps> = ({ touched, error }) => {
  if (touched && error) {
    return <Typo color="error">{error}</Typo>;
  }

  return null;
};

export default FormError;
