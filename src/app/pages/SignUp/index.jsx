import React from 'react';
import { Container,  Logo, Image, Wrapper, TextInput, Button, Text } from './style';

const img = require('../../assets/images/logo.png');

export default function Signup() {
  return (
    <Container>
      <Logo>
        <Image source={img} />
      </Logo>

      <Wrapper>
        <TextInput
          placeholder="Nome completo"
          onChangeText={() => {}}
        />

        <TextInput
          placeholder="E-mail"
          onChangeText={() => {}}
        />

        <TextInput
          secureTextEntry={true}
          placeholder="Senha"
          onChangeText={() => {}}
        />

        <Button>
          <Text>Cadastrar conta</Text>
        </Button>

      </Wrapper>
    </Container>
  );
}
