import * as React from 'react';
import { Container, Wrapper, TextSubmit, Button, TextInput, Text, Title, Back, } from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AboutApp({navigation}) {
  return (
    <Container>
      <Wrapper>
      <Back>
        <MaterialCommunityIcons
          name="arrow-left"
          size={30}
          color="#90cc0c"
          onPress={() => navigation.goBack()}
        />
      </Back>
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
