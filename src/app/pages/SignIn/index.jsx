import React, { useContext, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
  Icon,
  SectionInput,
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

  const [securePassword, setSecurePassword] = useState(true);
  const [iconEye, setIconEye] = useState('eye-off');
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Logo>
        <Image source={img} />
      </Logo>

      <Wrapper>
        {error ? (
          <SectionInput>
            <TextInputError
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              autoCompleteType="email"
              onChangeText={text => setEmail(text)}
            />
            <Icon>
              <MaterialCommunityIcons
                name={'alert'}
                color={'#f02849'}
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
            onChangeText={text => setEmail(text)}
          />
        )}

        {error ? (
          <SectionInput>
            <TextInputError
              secureTextEntry={securePassword}
              textContentType="password"
              autoCapitalize="none"
              autoCompleteType="password"
              placeholder="Senha"
              onChangeText={text => setPassword(text)}
            />
            <Icon
              onPress={
                securePassword
                  ? () => setSecurePassword(false) || setIconEye('eye')
                  : () => setSecurePassword(true) || setIconEye('eye-off')
              }
            >
              <MaterialCommunityIcons
                name={iconEye}
                color={'black'}
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
              onChangeText={text => setPassword(text)}
            />
            <Icon
              onPress={
                securePassword
                  ? () => setSecurePassword(false) || setIconEye('eye')
                  : () => setSecurePassword(true) || setIconEye('eye-off')
              }
            >
              <MaterialCommunityIcons
                name={iconEye}
                color={'black'}
                size={25}
                style={{ marginRight: 15 }}
              />
            </Icon>
          </SectionInput>
        )}

        {error && (
          <TextError>Falha na Autenticação. Tente Novamente!</TextError>
        )}

        <Button onPress={handleSignIn}>
          <TextSubmit>Acessar</TextSubmit>
        </Button>

        <Link onPress={() => navigation.navigate('ForgotPassword')}>
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
