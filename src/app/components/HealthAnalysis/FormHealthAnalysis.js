import React from 'react';

import { styles } from './FormHealthAnalysis.style';

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { RadioButton } from 'react-native-paper';

export default function App() {
  const [value, setValue] = React.useState('first')
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <RadioButton.Group style={styles.radioButton} onValueChange={newValue => setValue(newValue)} value={value}>
          <Text>Gênero</Text>
          <View>
            <Text>Masculino</Text>
            <RadioButton value="first" />
          </View>
          <View>
            <Text>Feminio</Text>
            <RadioButton value="second" />
          </View>
        </RadioButton.Group>
        <TextInput style={styles.input} placeholder="Idade" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TextInput style={styles.input} placeholder="Peso" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TextInput style={styles.input} placeholder="Altura" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TextInput style={styles.input} placeholder="Qual é o seu tipo físico?" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TextInput style={styles.input} placeholder="Qual é o seu porcentual de gordura?" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TextInput style={styles.input} placeholder="Qual é a sua massa muscular?" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TextInput style={styles.input} placeholder="Qual é seus hábitos alimentares?" autoCorrect={false} onChangeText={() => { }}></TextInput>
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>
            Cadastrar Ficha
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}