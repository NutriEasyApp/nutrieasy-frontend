import React from "react";
import {
  Container,
  TextInput,
  Button,
  Text,
  Title,
  TextButton,
  Back,
} from "./style";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ForgotPassword({ navigation }) {
  return (
    <Container>
      <Back>
        <MaterialCommunityIcons
          name="arrow-left"
          size={30}
          color="#90cc0c"
          onPress={() => navigation.navigate("SignIn")}
        />
      </Back>

      <Title>Esqueceu sua senha</Title>
      <Text>
        Esqueceu sua Senha? Não se preocupe. É só nos dizer seu e-mail que
        enviaremos um link e um código de acesso para você cadastrar uma nova
        senha.
      </Text>
      <TextInput placeholder="E-mail" />
      <Button>
        <TextButton>Enviar</TextButton>
      </Button>
    </Container>
  );
}