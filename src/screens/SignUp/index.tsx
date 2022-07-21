import React from 'react';
import {
  Container,
  ContentScroll,
  LogoContainer,
  Logo,
  Title,
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
import { Alert, Platform } from 'react-native';
import api from '../../api/api';

type FormData = {
  name: string;
  gender: string;
  birthDate: string;
  email: string;
  password: string;
  city: number;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Digite seu nome"),
  gender: Yup.string().required("Digite seu sexo"),
  birthDate: Yup.number().typeError("Digite apenas números"),
  email: Yup.string().required("Digite seu email"),
  password: Yup.string().length(4, "A senha deve ser de quatro números"),
  confirPassword: Yup.string().required("Digite sua senha").oneOf([Yup.ref('password'), null], "As senhas não conferem")
});

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  async function handleRegister(form: FormData) {
    const signUpUser = {
      name: form.name,
      gender: form.sex,
      birth_date: form.birthDate,
      email: form.email,
      password: form.password,
      city_id: 1
      {
        "name": "string",
        "email": "user@example.com",
        "password": "string",
        "gender": "string",
        "city_id": 0,
        "birth_date": "string"
      }
    }
    try {
      const response = await api.post('auth/signup', signUpUser);
      if (response.status === 200) {
        Alert.alert("Cadastro realizado com sucesso. Clique no link que foi enviado ao seu email para finalizar o cadastro")
        
      }
      console.log(response)
    } catch (error) {
      console.error(error)
      Alert.alert("Falha ao realizar o cadastro. Tente novamente")

    }
  }


return (
  <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
    <LogoContainer>
      <Logo source={Imagem} />
    </LogoContainer>

    <Title> Cadastro de Usuario
    </Title>

    <ContentScroll>
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
              name='gender'
              label='Sexo'
              control={control}
              error={errors.gender && errors.gender.message}
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
              error={errors.birthDate && errors.birthDate.message}
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
    </ContentScroll>
    <ContainerButton>
      <Button title='CADASTRAR' onPress={handleRegister}/>
    </ContainerButton>
  </Container>
);
}