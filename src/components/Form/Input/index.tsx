import React from 'react';
import { TextInputProps } from 'react-native';
import {
  Container, Label
} from './styles';

export type Props = TextInputProps & {
  label?: string;
}

export function Input({label, ...rest}: Props) {
  return (
    <>
      <Label>
        {label}

      </Label>

      <Container {...rest}>

      </Container>
    </>


  );
}