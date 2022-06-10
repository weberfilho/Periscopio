import React from 'react';
import {
  Container,
  ContentScroll,
  Logo,
  Form,
  InputRow,
  InputGroup,
  ContainerButton
} from './styles';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { InputForm } from '../../components/Form/InputForm';
import Imagem from '../../assets/Logo.png';
import { Button } from '../../components/Button';
import { Platform } from 'react-native';

const schema = Yup.object().shape({
  name: Yup.string().required("Digite seu nome"),
  sex: Yup.string().required("Digite seu sexo"),
  age: Yup.date().required("Digite sua data de nascimento").typeError("Digite apenas números"),
  email: Yup.string().required("Digite seu email"),
  password: Yup.string().required("Digite sua senha").length(4, "A senha deve ser de quatro números"),
  confirPassword: Yup.string().required("Digite sua senha").oneOf([Yup.ref('password'), null], "As senhas não conferem")
});

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

      <ContentScroll>
        <Logo source={Imagem} />

        <Form>
          <InputForm
            placeholder='Digite seu nome ou apelido'
            autoCapitalize='words'
            autoCorrect={false}
            name='name'
            label='Nome'
            control={control}
            error={errors.name && errors.name.message}
          />

          <InputRow>
            <InputGroup>
              <InputForm
                placeholder='Digite seu sexo'
                autoCapitalize='words'
                autoCorrect={false}
                name='sex'
                label='Sexo'
                control={control}
                error={errors.sex && errors.sex.message}
              />
            </InputGroup>
            <InputGroup>
              <InputForm
                placeholder='Data de nascimento'
                autoCorrect={false}
                keyboardType='numeric'
                name='birthDate'
                label='Data de Nascimento'
                control={control}
                error={errors.age && errors.age.message}
              />
            </InputGroup>
          </InputRow>
          <InputForm
            placeholder='Digite seu email'
            autoCorrect={false}
            name='email'
            label='Email'
            control={control}
            error={errors.email && errors.email.message}
          />
          <InputForm
            placeholder='Digite sua senha'
            autoCorrect={false}
            secureTextEntry
            name='passsword'
            label='Senha'
            control={control}
            error={errors.password && errors.password.message}
          />

          <InputForm
            placeholder='Confirme sua senha'
            autoCorrect={false}
            secureTextEntry
            name='confirmPassword'
            label='Confirme sua senha'
            control={control}
            error={errors.confirmPassword && errors.confirmPassword.message}
          />         
        </Form>
        <ContainerButton>
            <Button title='CADASTRAR' />
          </ContainerButton>
      </ContentScroll>
    </Container>
  );
}