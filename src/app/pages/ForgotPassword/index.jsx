import React, { useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Container,
  TextInput,
  Button,
  Text,
  Title,
  TextButton,
  Back,
  TextInputError,
  Icon,
  SectionInput,
} from "./style";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState("");
  const [cleanError, setCleanError] = useState(false);

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
        Esqueceu sua Senha? Não se preocupe. É só nos dizer seu e-mail que enviaremos um link e um
        código de acesso para você cadastrar uma nova senha.
      </Text>

      {cleanError ? (
        <SectionInput>
          <TextInputError
            placeholder="E-mail"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
            onChangeText={(text) => setEmail(text)}
            onFocus={() => setCleanError(false)}
            placeholderTextColor={"#f02849"}
          />
          <Icon>
            <MaterialCommunityIcons
              name={"alert"}
              color={"#f02849"}
              size={25}
              style={{ marginRight: 15 }}
            />
          </Icon>
        </SectionInput>
      ) : (
        <TextInput
          placeholder="E-mail"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCompleteType="email"
          onChangeText={(text) => setEmail(text)}
        />
      )}
      <Button>
        <TextButton>Enviar</TextButton>
      </Button>
    </Container>
  );
}