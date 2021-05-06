import React from 'react';
import { styles } from './style';

import {
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const logoImg = require('../../../assets/images/logo.png');

export default function Signup() {
  return (
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.containerLogo}>
        <Image style={styles.logoImg} source={logoImg} />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Cadastrar conta</Text>
        </TouchableOpacity>
        
      </View>
    </KeyboardAvoidingView>
  );
}
