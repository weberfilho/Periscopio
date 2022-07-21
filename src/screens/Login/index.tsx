import React from 'react';
import {
  Container,
  ContentButtton,
  LogoContainer,
  ForgotPin,
  Logo,
  ButtonRow,
  ButtonGroup
} from './styles'


import { Button } from '../../components/Button';
import { Input } from '../../components/Form/Input';

import Imagem from '../../assets/Logo.png';


export function Login({ navigation }: any) {
  function handleSignIn() {
    navigation.navigate('Home')
  }
  function handleSignUp() {
    navigation.navigate('Cadastro')
  }
  return (
    <Container>
      <LogoContainer>
        <Logo source={Imagem} />
      </LogoContainer>

      <Input label='Email' placeholder='Digite seu email' />
      <Input label='Senha' placeholder='Digite sua senha' secureTextEntry />

      <ForgotPin>Esqueci Minha Senha</ForgotPin>
      <ButtonRow>
        <ButtonGroup>
          <Button
            title='CADASTRAR'
            onPress={handleSignUp}
          />
        </ButtonGroup>
        <ButtonGroup>
          <Button
            title='ENTRAR'
            onPress={handleSignIn}
          />
        </ButtonGroup>


      </ButtonRow>




    </Container>

  )

}

