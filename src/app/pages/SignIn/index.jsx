import React, { useContext, useState } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { styles } from './style';
import AuthContext from '../../contexts/auth';

export default function SignIn() {
  const { auth, error } = useContext(AuthContext);

  function hangleForgotYourPassword() {}

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    auth(email, password);
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
          style={styles.logoImg}
          source={require('../../../assets/images/logo.png')}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          placeholderTextColor="#222"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          textContentType="password"
          autoCapitalize="none"
          autoCompleteType="password"
          placeholder="Senha"
          autoCorrect={false}
          placeholderTextColor="#222"
          onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={handleSignIn}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar Conta</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity onPress={hangleForgotYourPassword}>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
