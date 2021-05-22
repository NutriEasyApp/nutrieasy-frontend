import * as React from 'react';
import { Container, Wrapper, TextSubmit, Button, TextInput, Text, Title } from './style';

export default function AboutApp({}) {
  return (
    <Container>
      <Wrapper>
        <Title>Alterar Senha</Title>
        <Text>Crie uma senha mais forte. Recomendamos usar uma senha que você não esteja usando em nenhum outro lugar.</Text>
          <TextInput
            secureTextEntry={true}
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            placeholder="Senha Atual"
          />

          <TextInput
            secureTextEntry={true}
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            placeholder="Nova Senha"
          />

          <TextInput
            secureTextEntry={true}
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            placeholder="Confirmar Nova Senha"
          />

        <Button>
          <TextSubmit>Alterar Senha</TextSubmit>
        </Button>

      </Wrapper>
    </Container>
  );
}
