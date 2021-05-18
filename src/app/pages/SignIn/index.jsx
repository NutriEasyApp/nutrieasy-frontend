import React, { useContext, useState } from 'react';
import { Container, Logo, Image, Wrapper, TextInput, TextInputError, Button, TextSubmit, TextRegister, TextForgotPassword, Link, TextError } from './style';

import AuthContext from '../../contexts/auth';

const img = require('../../assets/images/logo.png');

export default function SignIn() {
  const { auth, error } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    auth(email, password);
  }

  return (
    <Container>
      <Logo>
        <Image source={img} />
      </Logo>

      <Wrapper>

        {error ?
          <TextInputError
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCompleteType="email"
          placeholderTextColor="#222"
          onChangeText={text => setEmail(text)}
          />
        : 
          <TextInput
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCompleteType="email"
          placeholderTextColor="#222"
          onChangeText={text => setEmail(text)}
        />}
        
        
        {error ?
          <TextInputError
          secureTextEntry={true}
          textContentType="password"
          autoCapitalize="none"
          autoCompleteType="password"
          placeholder="Senha"
          placeholderTextColor="#222"
          onChangeText={text => setPassword(text)}
        />  
      : 
        <TextInput
          secureTextEntry={true}
          textContentType="password"
          autoCapitalize="none"
          autoCompleteType="password"
          placeholder="Senha"
          placeholderTextColor="#222"
          onChangeText={text => setPassword(text)}
        />}
        
        {error && <TextError>Falha na Autenticação. Tente Novamente!</TextError> }

         
        <Button onPress={handleSignIn}>
          <TextSubmit>Acessar</TextSubmit>
        </Button>

        <Link>
          <TextRegister>Criar Conta</TextRegister>
        </Link>

        <Link>
          <TextForgotPassword>Esqueceu sua senha?</TextForgotPassword>
        </Link>
      </Wrapper>
      
    </Container>
  );
}
