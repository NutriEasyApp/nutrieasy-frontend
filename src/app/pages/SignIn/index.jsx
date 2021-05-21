import React, { useContext, useState } from 'react';
import {
  Container,
  Logo,
  Image,
  Wrapper,
  TextInput,
  TextInputError,
  Button,
  TextSubmit,
  TextRegister,
  TextForgotPassword,
  Link,
  TextError,
  Footer,
} from './style';

import AuthContext from '../../contexts/auth';

const img = require('../../assets/images/logo.png');

export default function SignIn({ navigation }) {
  const { auth, error } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    auth(email, password);
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Logo>
        <Image source={img} />
      </Logo>

      <Wrapper>
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
          <TextError>Falha na Autenticação. Tente Novamente!</TextError>
        )}

        <Button onPress={handleSignIn}>
          <TextSubmit>Acessar</TextSubmit>
        </Button>

        <Link>
          <TextForgotPassword>Esqueceu sua senha?</TextForgotPassword>
        </Link>

        <Footer>
          <Link onPress={() => navigation.navigate('SignUp')}>
            <TextRegister>Ainda não tem uma conta? Crie uma Conta</TextRegister>
          </Link>
        </Footer>
        
      </Wrapper>
    </Container>
  );
}
