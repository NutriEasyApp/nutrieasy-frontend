import React, { useState, useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  Logo,
  Image,
  Wrapper,
  TextInput,
  Button,
  Text,
  Back,
  TextInputError,
  TextError,
  Icon,
  SectionInput,
} from "./style";

import AuthContext from "../../contexts/auth";
const img = require("../../assets/images/logo.png");

export default function Signup({ navigation }) {
  const { register, error, errorRegister } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    register(email, username, password);
  };

  const [securePassword, setSecurePassword] = useState(true);
  const [iconEye, setIconEye] = useState("eye-off");

  return (
    <Container>
      <Logo>
        <Image source={img} />
      </Logo>

      <Back>
        <MaterialCommunityIcons
          name="arrow-left"
          size={30}
          color="#90cc0c"
          onPress={() => navigation.navigate("SignIn")}
        />
      </Back>

      <Wrapper>
        {errorRegister ? (
          <SectionInput>
            <TextInputError
              placeholder="Apelido"
              autoCapitalize="none"
              placeholderTextColor="#90949c"
              onChangeText={(text) => setUsername(text)}
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
            placeholder="Apelido"
            autoCapitalize="none"
            onChangeText={(text) => setUsername(text)}
          />
        )}

        {errorRegister ? (
          <SectionInput>
            <TextInputError
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              autoCompleteType="email"
              placeholderTextColor="#90949c"
              onChangeText={(text) => setEmail(text)}
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
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
            onChangeText={(text) => setEmail(text)}
          />
        )}
        {errorRegister ? (
          <SectionInput>
            <TextInputError
              secureTextEntry={securePassword}
              textContentType="password"
              autoCapitalize="none"
              autoCompleteType="password"
              placeholder="Senha"
              onChangeText={(text) => setPassword(text)}
            />
            <Icon
              onPress={
                securePassword
                  ? () => setSecurePassword(false) || setIconEye("eye")
                  : () => setSecurePassword(true) || setIconEye("eye-off")
              }
            >
              <MaterialCommunityIcons
                name={iconEye}
                color={"black"}
                size={25}
                style={{ marginRight: 15 }}
              />
            </Icon>
          </SectionInput>
        ) : (
          <SectionInput>
            <TextInput
              secureTextEntry={securePassword}
              textContentType="password"
              autoCapitalize="none"
              autoCompleteType="password"
              placeholder="Senha"
              onChangeText={(text) => setPassword(text)}
            />
            <Icon
              onPress={
                securePassword
                  ? () => setSecurePassword(false) || setIconEye("eye")
                  : () => setSecurePassword(true) || setIconEye("eye-off")
              }
            >
              <MaterialCommunityIcons
                name={iconEye}
                color={"black"}
                size={25}
                style={{ marginRight: 15 }}
              />
            </Icon>
          </SectionInput>
        )}

        {errorRegister && <TextError>Falha na criação da sua conta. Tente Novamente!</TextError>}

        <Button onPress={handleSubmit}>
          <Text>Cadastrar conta</Text>
        </Button>
      </Wrapper>
    </Container>
  );
}
