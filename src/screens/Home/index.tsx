import React from 'react';
import {
  Container,
  LogoContainer,
  Logo,
  Content,
} from './styles';

import Image from '../../assets/Logo.png';
import { Button } from '../../components/Button';

export function Home() {
  return (
    <Container>
      <LogoContainer>
        <Logo source={Image} />
      </LogoContainer>

      <Content>
        <Button title='FESTAS E EVENTOS'/>
        <Button title='BARES E BOTECOS'/>
        <Button title='CASAS NOTURNAS'/>
        <Button title='COMEMORAR ANIVERSARIO'/>
      </Content>

    </Container>
  );
}