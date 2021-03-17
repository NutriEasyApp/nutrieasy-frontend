import React, { Component } from 'react';
import { styles } from './FormHealthAnalysis.style';

import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { RadioButton } from 'react-native-paper';

export default function HealthAnalysis() {

  const [checked, setChecked] = React.useState('first');

  return (

    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.container}>

        <TextInput style={styles.input} placeholder="Idade" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TextInput style={styles.input} placeholder="Peso" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TextInput style={styles.input} placeholder="Altura" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TextInput style={styles.input} placeholder="Qual é o seu tipo físico?" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TextInput style={styles.input} placeholder="Qual é o seu porcentual de gordura?" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TextInput style={styles.input} placeholder="Qual é a sua massa muscular?" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TextInput style={styles.input} placeholder="Qual é seus hábitos alimentares?" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <Text style={styles.radioButtonTitle}>Gênero</Text>

        <View>
          <Text>Masculino</Text><RadioButton value="first" status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')} />

          <Text>Feminino</Text><RadioButton value="second" status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')} />
        </View>

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Cadastrar Ficha</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  );
}