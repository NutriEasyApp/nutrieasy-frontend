import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';


export default function App() {

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image style={styles.logoImg} source={require('./assets/images/logo.png')}></Image>
      </View>
      
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TextInput style={styles.input} placeholder="Senha" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>
            Acessar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>
            Criar Conta
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: -350
  },
  logoImg: {
    width: 180,
    height: 180
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },
  input: {
    backgroundColor: '#f9f9f9',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#90cc0c',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText: {
    color: "#FFF",
    fontSize: 18
  },
  btnRegister: {
    marginTop: 10
  },
  registerText: {
    color: '#3b3b3b',
  }
});