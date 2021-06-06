import React, { useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, TextInput, Button, Text, Title, TextButton, Back, TextInputError, Icon, SectionInput } from "./style";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CodeResetPassword({ navigation }) {
  const [code, setCode] = useState("");
  const [cleanError, setCleanError] = useState(false);

  return (
    <Container>
      <Back>
        <MaterialCommunityIcons name="arrow-left" size={30} color="#90cc0c" onPress={() => navigation.navigate("SignIn")} />
      </Back>

      <Title>Código de Redefinição de Senha</Title>
      <Text>Digite o código de redefinição de senha que foi enviado para você. Lembrando que não é a mesma que sua senha.</Text>

      {cleanError ? (
        <SectionInput>
          <TextInputError
            placeholder="Código"
            keyboardType="code"
            textContentType="code"
            autoCapitalize="none"
            autoCompleteType="code"
            onChangeText={(text) => setCode(text)}
            onFocus={() => setCleanError(false)}
            placeholderTextColor={"#f02849"}
          />
          <Icon>
            <MaterialCommunityIcons name={"alert"} color={"#f02849"} size={25} style={{ marginRight: 15 }} />
          </Icon>
        </SectionInput>
      ) : (
        <TextInput
          placeholder="Código"
          keyboardType="code"
          textContentType="code"
          autoCapitalize="none"
          autoCompleteType="code"
          onChangeText={(text) => setCode(text)}
        />
      )}
      <Button>
        <TextButton>Enviar</TextButton>
      </Button>
    </Container>
  );
}