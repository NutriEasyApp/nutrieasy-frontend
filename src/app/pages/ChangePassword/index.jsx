import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  TextSubmit,
  Button,
  TextInput,
  Text,
  Title,
  Back,
  TextInputError,
} from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../../services/api";

const usersData = {
  water: "",
  protein: "",
  carbohydrates: "",
  lipids: "",
  fats: "",
};
export default function ChangePassword({ navigation }) {
  const [passwordCurrent, setPasswordCurrent] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [passwordNewConfirm, setPasswordNewConfirm] = useState("");

  const [password, setPassword] = useState(usersData);
  useEffect(() => {
    async function getPassword() {
      try {
        const user = await AsyncStorage.getItem("@RNAuth:user");
        const response = await api.get(`/users/${user}`);
        setPassword(response.data.password);
      } catch (err) {
        const { status } = err.response;
        if (status === 401) {
          signOut();
        }
      }
    }
    getPassword();
  }, []);

  const updatePassword = async () => {
    /*const user = await AsyncStorage.getItem('@RNAuth:user');
    try {
      await api.put('/users', {
       password: 
      });
    } catch (err) {
      console.log('Ocorreu um erro: ', err);
    }*/
  };

  const [securePassword, setSecurePassword] = useState(true);
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
        {passwordCurrent !== password ? (
          /*TextInputError */
          <TextInput
          secureTextEntry={true}
          textContentType="password"
          autoCapitalize="none"
          autoCompleteType="password"
          placeholder="Senha Atual"
          onChangeText={(text) => setPasswordCurrent(text)}
        />
        ) : (
          <TextInput
            secureTextEntry={true}
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            placeholder="Senha Atual"
            onChangeText={(text) => setPasswordCurrent(text)}
          />
        )}

        {passwordCurrent !== password ? (
           /*TextInputError */
          <TextInput
            secureTextEntry={true}
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            placeholder="Nova Senha"
            onChangeText={(text) => setPasswordNew(text)}
          />
        ) : (
          <TextInput
            secureTextEntry={true}
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            placeholder="Nova Senha"
            onChangeText={(text) => setPasswordNew(text)}
          />
        )}

        {passwordCurrent !== password ? (
          /*TextInputError */
          <TextInput
            secureTextEntry={true}
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            placeholder="Confirmar Nova Senha"
            onChangeText={(text) => setPasswordNewConfirm(text)}
          />
        ) : (
          <TextInput
            secureTextEntry={true}
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            placeholder="Confirmar Nova Senha"
            onChangeText={(text) => setPasswordNewConfirm(text)}
          />
        )}

        <Button onPress={updatePassword}>
          <TextSubmit>Alterar Senha</TextSubmit>
        </Button>
      </Wrapper>
    </Container>
  );
}