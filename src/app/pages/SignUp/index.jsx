import React, { useState, useContext } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
} from './style';

import AuthContext from '../../contexts/auth';
const img = require('../../assets/images/logo.png');

export default function Signup({ navigation }) {
  const { register, error } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    register(email, username, password);
  };

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
          onPress={() => navigation.goBack()}
        />
      </Back>

      <Wrapper>
        {error ? (
          <TextInputError
            placeholder="Apelido"
            autoCapitalize="none"
            placeholderTextColor="#dc3545"
            onChangeText={text => setUsername(text)}
          />
        ) : (
          <TextInput
            placeholder="Apelido"
            autoCapitalize="none"
            onChangeText={text => setUsername(text)}
          />
        )}

        {error ? (
          <TextInputError
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
            placeholderTextColor="#dc3545"
            onChangeText={text => setEmail(text)}
          />
        ) : (
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
            onChangeText={text => setEmail(text)}
          />
        )}
        {error ? (
          <TextInputError
            secureTextEntry={true}
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            placeholder="Senha"
            placeholderTextColor="#dc3545"
            onChangeText={text => setPassword(text)}
          />
        ) : (
          <TextInput
            secureTextEntry={true}
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            placeholder="Senha"
            onChangeText={text => setPassword(text)}
          />
        )}

        {error && (
          <TextError>Falha na criação da sua conta. Tente Novamente!</TextError>
        )}

        <Button onPress={handleSubmit}>
          <Text>Cadastrar conta</Text>
        </Button>
      </Wrapper>
    </Container>
  );
}
