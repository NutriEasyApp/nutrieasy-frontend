import React, { useContext, useState } from 'react';
import { styles } from './style';

import {
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import AuthContext from '../../contexts/auth';

import { emailValidator } from '../../validators/emailValidator';
import { passwordValidator } from '../../validators/passwordValidator';

export default function SignIn() {
  const { signed, signIn } = useContext(AuthContext);
  //console.log(signed);

  function hangleForgotYourPassword() {}

  function handleSignIn() {
    signIn();

    /*const [email, setEmail] = useState({value: '', error: ''});
    const [password, setPassword] = useState({value: '', error: ''});

    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if(emailError || passwordError){
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError})
      return
    }*/
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
          /*onChangeText={(text) => setEmail({ value: text, error: ''})}*/
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
          /*onChangeText={(text) => setPassword({value: text, error: '' })}*/
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
