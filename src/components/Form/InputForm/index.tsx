import React from 'react';
import { TextInputProps } from 'react-native';
import {
  Container, ErrorMessage
} from './styles';

import { Control, Controller } from "react-hook-form";

import {Input} from "../Input";

type Props = TextInputProps & { 
  label?: string;
  name: string;
  control: Control;
  error: string;

}

export function InputForm({label, name, control, error, ...rest}: Props) {
  return (
    <Container>
      <Controller 
        name={name }  
        control={control}     
        
        render={({field: {onChange, value}}) => (
          <>
            <ErrorMessage>{error}</ErrorMessage>
            <Input
              label={label}
              onChangeText={onChange}
              value={value}
              {...rest}            
            />
          
          </>
        )}
      
      />



     


    </Container>
  );
}