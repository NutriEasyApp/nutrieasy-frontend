import React, { useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, TextInput, Button, Text, Title, TextButton, Back, TextInputError, Icon, SectionInput, TextError } from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AuthContext from "../../contexts/auth";
import api from "../../services/api";

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState("");
  const [cleanError, setCleanError] = useState(false);

  const { signOut } = useContext(AuthContext);

  const postEmail = async () => {
    try {
      const user = await AsyncStorage.getItem("@RNAuth:user");
      await api.post("/forgotpassword", {
        email: email,
      });
      setCleanError(false);
      navigation.navigate("ResetPassword", { email: email });
    } catch (err) {
      const { status } = err.response;
      console.log(status);
      if (status === 404 || status === 500) {
        setCleanError(true);
        console.log("Ocorreu um erro: ", err);
      } else signOut();
    }
  };

  {console.log("aquuuuu  " + cleanError)}
  return (
    <Container>
      <Back>
        <MaterialCommunityIcons name="arrow-left" size={30} color="#90cc0c" onPress={() => navigation.navigate("SignIn")} />
      </Back>

      <Title>Esqueceu sua senha</Title>
      <Text>
        Esqueceu sua Senha? Não se preocupe. É só nos dizer seu e-mail que enviaremos um link e um código de acesso para você
        cadastrar uma nova senha.
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
            <MaterialCommunityIcons name={"alert"} color={"#f02849"} size={25} style={{ marginRight: 15 }} />
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

      {cleanError && <TextError>E-mail não encontrado. Tente Novamente!</TextError>}

      <Button onPress={postEmail}>
        <TextButton>Enviar</TextButton>
      </Button>
    </Container>
  );
}