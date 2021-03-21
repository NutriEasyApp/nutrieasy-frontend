import React, { Component, useState } from 'react';
import { styles } from './FormHealthAnalysis.style';
import RadioGroup from 'react-native-radio-buttons-group';
import {
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { RadioButton } from 'react-native-paper';

import DateTimePicker from '@react-native-community/datetimepicker';

const radioButtonsDataGender = [{
  id: '1',
  label: 'Masculino',
  value: 'male'
}, {
  id: '2',
  label: 'Feminino',
  value: 'female'
}]


const radioButtonsDataCorporalBiotype = [{
  id: '1',
  label: 'Ectomorfo',
  value: 'ectomorfo'
}, {
  id: '2',
  label: 'Endomorfo',
  value: 'endomorfo'
}, {
  id: '3',
  label: 'Mesomorfo',
  value: 'mesomorfo'
}]

export default function HealthAnalysis() {

  const [radioButtonsGender, setradioButtonsGender] = useState(radioButtonsDataGender)
  const [radioButtonsCorporalBiotype, setradioButtonsCorporalBiotype] = useState(radioButtonsDataCorporalBiotype)

  function onPressRadioButtonGender(radioButtonsArrayGender) {
    setradioButtonsGender(radioButtonsArrayGender);
  }

  function onPressRadioButtonCorporalBiotype(radioButtonsArrayCorporalBiotype) {
    setradioButtonsCorporalBiotype(radioButtonsArrayCorporalBiotype);
  }

  const [checked, setChecked] = React.useState('first');

  /* Date Picker */
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (

    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.container}>

        <Text style={{ fontSize: 23, fontWeight: '700', marginTop: 30, marginBottom: 15 }}>Preencha abaixo a ficha de análise de saúde:</Text>

        <View>
          <View>
            <TouchableOpacity style={styles.inputTouchableOpacity} onPress={showDatepicker}>
              <Text style={styles.textTouchableOpacity}>Qual é a sua Data de Nascimento?</Text>
            </TouchableOpacity>
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        <TextInput style={styles.input} placeholder="Qual é o seu Peso?" autoCorrect={false} onChangeText={() => { }}></TextInput>

        <TextInput style={styles.input} placeholder="Qual é a sua Altura?" autoCorrect={false} onChangeText={() => { }}></TextInput>

        <View>
          <Text style={styles.radioButtonTitle}>Qual é o seu Biotipo Físico?</Text>
          <RadioGroup
            radioButtons={radioButtonsCorporalBiotype}
            onPress={onPressRadioButtonCorporalBiotype}
            layout='row'
          />
        </View>

        <View>
          <Text style={styles.radioButtonTitle}>Qual é o seu Gênero?</Text>
          <RadioGroup
            radioButtons={radioButtonsGender}
            onPress={onPressRadioButtonGender}
            layout='row'
          />
        </View>


        {/*<TextInput style={styles.input} placeholder="Qual é o seu porcentual de gordura?" autoCorrect={false} onChangeText={() => { }}></TextInput>

        <TextInput style={styles.input} placeholder="Qual é a sua massa muscular?" autoCorrect={false} onChangeText={() => { }}></TextInput>

          <TextInput style={styles.input} placeholder="Qual é seus hábitos alimentares?" autoCorrect={false} onChangeText={() => { }}></TextInput>*/}


        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Cadastrar dados</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  );
}