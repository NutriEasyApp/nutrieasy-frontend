import React, { Component, useState } from 'react';
import { styles } from './FormHealthAnalysis.style';
import RadioGroup from 'react-native-radio-buttons-group';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { RadioButton } from 'react-native-paper';

const radioButtonsData = [{
  id: '1',
  label: 'Masculino',
  value: 'male'
}, {
  id: '2',
  label: 'Feminino',
  value: 'female'
}]

export default function HealthAnalysis() {


    const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }


  const [checked, setChecked] = React.useState('first');

  return (

    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 30, marginBottom: 15 }}>Ficha de Análise de Saúde:</Text>

        <TextInput style={styles.input} placeholder="Idade" autoCorrect={false} onChangeText={() => { }}></TextInput>

        <TextInput style={styles.input} placeholder="Peso" autoCorrect={false} onChangeText={() => { }}></TextInput>

        <TextInput style={styles.input} placeholder="Altura" autoCorrect={false} onChangeText={() => { }}></TextInput>

        <TextInput style={styles.input} placeholder="Qual é o seu tipo físico?" autoCorrect={false} onChangeText={() => { }}></TextInput>

        <TextInput style={styles.input} placeholder="Qual é o seu porcentual de gordura?" autoCorrect={false} onChangeText={() => { }}></TextInput>

        <TextInput style={styles.input} placeholder="Qual é a sua massa muscular?" autoCorrect={false} onChangeText={() => { }}></TextInput>

        <TextInput style={styles.input} placeholder="Qual é seus hábitos alimentares?" autoCorrect={false} onChangeText={() => { }}></TextInput>

        <Text style={styles.radioButtonTitle}>Gênero</Text>

        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton}
            layout='row'
        />
        
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Cadastrar Ficha</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  );
}