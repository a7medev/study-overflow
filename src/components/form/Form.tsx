import React from 'react';
import { Formik } from 'formik';

const Form: React.FC<React.ComponentProps<typeof Formik>> = ({
  children,
  ...props
}) => {
  return <Formik {...props}>{() => children}</Formik>;
};

export default Form;
