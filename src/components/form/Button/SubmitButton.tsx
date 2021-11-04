import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { useFormikContext } from 'formik';

import Button, { ButtonProps } from './Button';

const SubmitButton: React.FC<ButtonProps> = ({
  children,
  onPress,
  ...props
}) => {
  const { isSubmitting, handleSubmit } = useFormikContext();

  const handlePress = (e: GestureResponderEvent) => {
    onPress?.(e);
    handleSubmit();
  };

  return (
    <Button onPress={handlePress} loading={isSubmitting} {...props}>
      {children}
    </Button>
  );
};

export default SubmitButton;
