import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  Wrapper,
  TextSubmit,
  Button,
  TextInput,
  Text,
  Title,
  Back,
  Icon,
  TextInputError,
  SectionInput,
  TextError,
} from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../../services/api";
import AuthContext from "../../contexts/auth";

export default function ChangePassword({ navigation }) {
  const { auth, error, setError } = useContext(AuthContext);

  const [passwordCurrent, setPasswordCurrent] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [passwordNewConfirm, setPasswordNewConfirm] = useState("");
  const [cleanError, setCleanError] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const updatePassword = async () => {
    const user = await AsyncStorage.getItem("@RNAuth:user");

    if (!passwordCurrent.trim()) {
      setCleanError(true);
      return;
    }
    try {
      await api.post("/changepassword", {
        id: `${user}`,
        currentpassword: passwordCurrent,
        newpassword: passwordNew,
        repeatnewpassword: passwordNewConfirm,
      });
      setError(false);
      setCleanError(false);
      navigation.navigate("Home");
    } catch (err) {
      setError(false);
      setCleanError(true);
      console.log("Ocorreu um erro: ", err);
    }
  };

  const [securePassword1, setSecurePassword1] = useState(true);
  const [securePassword2, setSecurePassword2] = useState(true);
  const [securePassword3, setSecurePassword3] = useState(true);
  const [iconEye1, setIconEye1] = useState("eye-off");
  const [iconEye2, setIconEye2] = useState("eye-off");
  const [iconEye3, setIconEye3] = useState("eye-off");

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
        <Text>
          Crie uma senha mais forte. Recomendamos usar uma senha que você não esteja usando em
          nenhum outro lugar.
        </Text>

        {!forgotPassword && (
          <>
            {cleanError ? (
              <SectionInput>
                <TextInputError
                  secureTextEntry={securePassword1}
                  textContentType="password"
                  autoCapitalize="none"
                  autoCompleteType="password"
                  placeholder="Senha Atual"
                  onChangeText={(text) => setPasswordCurrent(text)}
                  placeholderTextColor="#f02849"
                  onFocus={() => setCleanError(false)}
                />
                <Icon
                  onPress={
                    securePassword1
                      ? () => setSecurePassword1(false) || setIconEye1("eye")
                      : () => setSecurePassword1(true) || setIconEye1("eye-off")
                  }
                >
                  <MaterialCommunityIcons
                    name={iconEye1}
                    color={"#f02849"}
                    size={25}
                    style={{ marginRight: 15 }}
                  />
                </Icon>
              </SectionInput>
            ) : (
              <SectionInput>
                <TextInput
                  secureTextEntry={securePassword1}
                  textContentType="password"
                  autoCapitalize="none"
                  autoCompleteType="password"
                  placeholder="Senha Atual"
                  onChangeText={(text) => setPasswordCurrent(text)}
                />
                <Icon
                  onPress={
                    securePassword1
                      ? () => setSecurePassword1(false) || setIconEye1("eye")
                      : () => setSecurePassword1(true) || setIconEye1("eye-off")
                  }
                >
                  <MaterialCommunityIcons
                    name={iconEye1}
                    color={"black"}
                    size={25}
                    style={{ marginRight: 15 }}
                  />
                </Icon>
              </SectionInput>
            )}
          </>
        )}

        {cleanError ? (
          <SectionInput>
            <TextInputError
              secureTextEntry={securePassword2}
              textContentType="password"
              autoCapitalize="none"
              autoCompleteType="password"
              placeholder="Nova Senha"
              onChangeText={(text) => setPasswordNew(text)}
              placeholderTextColor="#f02849"
              onFocus={() => setCleanError(false)}
            />
            <Icon
              onPress={
                securePassword2
                  ? () => setSecurePassword2(false) || setIconEye2("eye")
                  : () => setSecurePassword2(true) || setIconEye2("eye-off")
              }
            >
              <MaterialCommunityIcons
                name={iconEye2}
                color={"#f02849"}
                size={25}
                style={{ marginRight: 15 }}
              />
            </Icon>
          </SectionInput>
        ) : (
          <SectionInput>
            <TextInput
              secureTextEntry={securePassword2}
              textContentType="password"
              autoCapitalize="none"
              autoCompleteType="password"
              placeholder="Nova Senha"
              onChangeText={(text) => setPasswordNew(text)}
            />
            <Icon
              onPress={
                securePassword2
                  ? () => setSecurePassword2(false) || setIconEye2("eye")
                  : () => setSecurePassword2(true) || setIconEye2("eye-off")
              }
            >
              <MaterialCommunityIcons
                name={iconEye2}
                color={"black"}
                size={25}
                style={{ marginRight: 15 }}
              />
            </Icon>
          </SectionInput>
        )}

        {cleanError ? (
          <SectionInput>
            <TextInputError
              secureTextEntry={securePassword3}
              textContentType="password"
              autoCapitalize="none"
              autoCompleteType="password"
              placeholder="Confirmar Nova Senha"
              placeholderTextColor="#f02849"
              onChangeText={(text) => setPasswordNewConfirm(text)}
              onFocus={() => setCleanError(false)}
            />
            <Icon
              onPress={
                securePassword3
                  ? () => setSecurePassword3(false) || setIconEye3("eye")
                  : () => setSecurePassword3(true) || setIconEye3("eye-off")
              }
            >
              <MaterialCommunityIcons
                name={iconEye3}
                color={"#f02849"}
                size={25}
                style={{ marginRight: 15 }}
              />
            </Icon>
          </SectionInput>
        ) : (
          <SectionInput>
            <TextInput
              secureTextEntry={securePassword3}
              textContentType="password"
              autoCapitalize="none"
              autoCompleteType="password"
              placeholder="Confirmar Nova Senha"
              onChangeText={(text) => setPasswordNewConfirm(text)}
            />
            <Icon
              onPress={
                securePassword3
                  ? () => setSecurePassword3(false) || setIconEye3("eye")
                  : () => setSecurePassword3(true) || setIconEye3("eye-off")
              }
            >
              <MaterialCommunityIcons
                name={iconEye3}
                color={"black"}
                size={25}
                style={{ marginRight: 15 }}
              />
            </Icon>
          </SectionInput>
        )}

        {cleanError && <TextError>Não foi possível alterar a senha. Tente Novamente!</TextError>}

        <Button onPress={updatePassword}>
          <TextSubmit>Alterar Senha</TextSubmit>
        </Button>
      </Wrapper>
    </Container>
  );
}