import React, { Component, useState } from 'react';
import { styles } from './FormHealthAnalysis.style';
import RadioGroup from 'react-native-radio-buttons-group';
import Slider from '@react-native-community/slider';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

import SliderRangeHeight from '../Slider/SliderHeight';
import SliderRangeWeight from '../Slider/SliderWeight';

var Locale = require('react-native-locale');

const radioButtonsDataGender = [
  {
    id: '1',
    label: 'Masculino',
    value: 'male',
  },
  {
    id: '2',
    label: 'Feminino',
    value: 'female',
  },
];

const radioButtonsDataCorporalBiotype = [
  {
    id: '1',
    label: 'Ectomorfo',
    value: 'ectomorfo',
  },
  {
    id: '2',
    label: 'Endomorfo',
    value: 'endomorfo',
  },
  {
    id: '3',
    label: 'Mesomorfo',
    value: 'mesomorfo',
  },
];


const radioButtonsDataObjectivePhysical = [
  {
    id: '1',
    label: 'Ganhar',
    value: 'GAIN',
  },
  {
    id: '2',
    label: 'Perder',
    value: 'LOSE',
  }
];


const radioButtonsDataEatingHabits = [
  {
    id: '1',
    label: 'Hábitos Alimentares',
    value: 'JUNK-FOOD',
  },
  {
    id: '2',
    label: 'Comida Saudável',
    value: 'HEALTH-FOOD',
  }
];




export default function HealthAnalysis() {


  /* Radio Button */
  const [radioButtonsGender, setradioButtonsGender] = useState(
    radioButtonsDataGender
  );

  const [
    radioButtonsCorporalBiotype,
    setradioButtonsCorporalBiotype,
  ] = useState(radioButtonsDataCorporalBiotype);


  const [
    radioButtonsObjectivePhysical,
    setradioButtonsObjectivePhysical,
  ] = useState(radioButtonsDataObjectivePhysical);


  const [
    radioButtonsEatingHabits,
    setradioButtonsEatingHabits,
  ] = useState(radioButtonsDataEatingHabits);


  function onPressRadioButtonGender(radioButtonsArrayGender) {
    setradioButtonsGender(radioButtonsArrayGender);
  }

  function onPressRadioButtonCorporalBiotype(radioButtonsArrayCorporalBiotype) {
    setradioButtonsCorporalBiotype(radioButtonsArrayCorporalBiotype);
  }

  function onPressRadioButtonObjectivePhysical(radioButtonsArrayObjectivePhysical) {
    setradioButtonsObjectivePhysical(radioButtonsArrayObjectivePhysical);
  }

  function onPressRadioButtonEatingHabits(radioButtonsArrayEatingHabits) {
    setradioButtonsEatingHabits(radioButtonsArrayEatingHabits);
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

  const showMode = currentMode => {
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
    <ScrollView>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.titlePage}>Ficha de Análise de Saúde</Text>
          <View>
            <View style={styles.viewBirthDay}>
              <TouchableOpacity style={styles.inputTouchableOpacity} onPress={showDatepicker}>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  <MaterialCommunityIcons style={{ textAlign: "right", }} name="calendar-month" color={'#000'} size={30} />
                  <Text style={styles.textTouchableOpacity}> Data de Nascimento</Text>
                </View>
              </TouchableOpacity>
            </View>
            {show && (
              <DateTimePicker maximumDate={new Date(2014, 12, 30)} testID="dateTimePicker" value={date} mode={mode} is24Hour={true} display="default" onChange={onChange} />
            )}
          </View>

          <View>
            <Text style={styles.textRadioBottom}>Qual é o seu Peso? </Text>
            <SliderRangeWeight />
            {/*<Text style={{ marginBottom: 15, color: '#90cc0c', fontWeight: '700' }}>30</Text>
            <Slider style={styles.sliderForm} step={1} value={100} minimumValue={10} maximumValue={200} minimumTrackTintColor="#90cc0c" maximumTrackTintColor="#000000" thumbTintColor="#90cc0c"/>*/}
          </View>

          <View>
            <Text style={styles.textRadioBottom}>Qual é a sua Altura? </Text>
            <SliderRangeHeight />
            {/*
            <Text style={{ marginBottom: 15, color: '#90cc0c', fontWeight: '700' }}>30</Text>
            <Slider style={styles.sliderForm} step={1} value={200} minimumValue={30} maximumValue={400} minimumTrackTintColor="#90cc0c" maximumTrackTintColor="#000000" thumbTintColor="#90cc0c"/>*/}
          </View>

          <View style={{ alignItems: "flex-start", }}>
            <Text style={styles.radioButtonTitle}> Qual é o seu Biotipo Físico?</Text>
            <RadioGroup radioButtons={radioButtonsCorporalBiotype} onPress={onPressRadioButtonCorporalBiotype} layout="column" />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.radioButtonTitle}>Quais são seus hábitos alimentares?</Text>
            <RadioGroup radioButtons={radioButtonsEatingHabits} onPress={onPressRadioButtonEatingHabits} layout="row" />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.radioButtonTitle}>Qual é o seu Gênero?</Text>
            <RadioGroup radioButtons={radioButtonsGender} onPress={onPressRadioButtonGender} layout="row" />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.radioButtonTitle}>Qual é o seu objetivo físico?</Text>
            <RadioGroup radioButtons={radioButtonsObjectivePhysical} onPress={onPressRadioButtonObjectivePhysical} layout="row" />
          </View>

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.submitText}>Cadastrar dados</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
