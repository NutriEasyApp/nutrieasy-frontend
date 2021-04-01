import React, { Component, useEffect, useState, useContext } from 'react';
import { styles } from './style';
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
  ScrollView,
  SafeAreaView,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import { SliderRange } from '../../components/Slider/SliderRange';

import api from '../../services/api';

import AuthContext from '../../contexts/auth';

const MyTheme = {
  colors: {
    primary: '#90cc0c',
  },
};

const genreTypes = [
  {
    id: '1',
    label: 'Masculino',
    value: 'm',
  },
  {
    id: '2',
    label: 'Feminino',
    value: 'f',
  },
];

const physicalBiotypeTypes = [
  {
    id: '1',
    label: 'Ectomorfo',
    value: 'ECTOMORPH',
    description: 'Ganha e perde massa rapido',
  },
  {
    id: '2',
    label: 'Endomorfo',
    value: 'ENDOMORPH',
  },
  {
    id: '3',
    label: 'Mesomorfo',
    value: 'MESOMORPH',
  },
];

const physicalObjectiveType = [
  {
    id: '1',
    label: 'Ganhar',
    value: 'GAIN',
  },
  {
    id: '2',
    label: 'Perder',
    value: 'LOSE',
  },
  {
    id: '3',
    label: 'Manter',
    value: 'KEEP',
  },
];

const eatingHabitsTypes = [
  {
    id: '1',
    label: 'Hábitos Alimentares',
    value: 'JUNK-FOOD',
  },
  {
    id: '2',
    label: 'Comida Saudável',
    value: 'HEALTH-FOOD',
  },
];

const userDataAnalysis = {
  weight: '',
  height: '',
  genre: '',
  birthdate: '',
  bodytype: '',
  objective: '',
  exercisetime: '',
};

export default function HealthAnalysis() {
  const { signed, user, signOut } = useContext(AuthContext);

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [corporalBiotype, setCorporalBiotype] = useState('');
  const [eatingHabits, setEatingHabits] = useState('');
  const [genre, setGender] = useState('');
  const [objective, setObjective] = useState('');
  const [bodytype, setBodytype] = useState('');
  const [exercisetime, setExerciseTime] = useState('');
  const [objectivePhysical, setObjectivePhysical] = useState('');
  // onChange={value=>setGender(value)}

  /* Radio Button - Variaveis */
  const [_rbGender, set_rbGender] = useState(genreTypes);

  const [_rbCorporalBiotype, set_rbCorporalBiotype] = useState(
    physicalBiotypeTypes
  );

  const [_rbObjectivePhysical, set_rbObjectivePhysical] = useState(
    physicalObjectiveType
  );

  const [_rbEatingHabits, set_rbEatingHabits] = useState(eatingHabitsTypes);

  /* Radio Button - Funções */
  function _onPressRBGender(_gender) {
    set_rbGender(_gender);
  }

  function _onPressRBCorporalBiotype(_corporalBiotype) {
    set_rbCorporalBiotype(_corporalBiotype);
  }

  function _onPressRBObjectivePhysical(_cbjectivePhysical) {
    set_rbObjectivePhysical(_cbjectivePhysical);
  }

  function _onPressRBEatingHabits(_eatingHabits) {
    set_rbEatingHabits(_eatingHabits);
  }

  const [checked, setChecked] = React.useState('first');

  /* Date Picker */
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    console.log(selectedDate);
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
  const submitAnalysis = async () => {
    console.log(date);
    console.log('altura', height);
    console.log('peso', weight);
    console.log('genre', genre);
    console.log('bodytype', bodytype);
    console.log('objetive', objective);
    console.log('exercisetime', exercisetime);
    const response = await api.post('/health', {
      id_user: 'b06c35b1-9342-467c-a028-23348f9b2a47',
      genre,
      height,
      weight,
      birthdate: '04/18/1999',
      bodytype,
      objective,
      exercisetime,
    });
    console.log(response);
    navigator.navigate('/');
  };

  const [result, setResult] = useState(userDataAnalysis);
  useEffect(() => {
    // const result = {
    //   weight: '75',
    //   height: '160',
    //   genre: 'm',
    //   birthdate: '18/04/1999',
    //   bodytype: 'ECTOMORPH',
    //   objective: 'GAIN',
    //   exercisetime: '2.15',
    // };
    async function getHealth() {
      const result = await api.get(
        '/nutrieasy/health/b06c35b1-9342-467c-a028-23348f9b2a47'
      );
      // console.log(result.data);
      setGender(result.data.genre);
      setWeight(result.data.weight);
      setHeight(result.data.height);
      setObjective(result.data.objective);
      setBodytype(result.data.bodytype);
      setExerciseTime(result.data.exercisetime);
    }
    getHealth();
  }, []);

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.titlePage}>Ficha de Análise de Saúde</Text>
          <View>
            <View style={styles.viewBirthDay}>
              <Text style={styles.textRadioBottom}>Qual é o seu Peso? </Text>
              <TouchableOpacity
                style={styles.inputTouchableOpacity}
                onPress={showDatepicker}
              >
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  <MaterialCommunityIcons
                    style={{ textAlign: 'right' }}
                    name="calendar-month"
                    color={'#000'}
                    size={30}
                  />
                  <Text style={styles.textTouchableOpacity}>
                    {' '}
                    Data de Nascimento
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {show && (
              <DateTimePicker
                maximumDate={new Date()}
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={event =>
                  setDate(new Date(event.nativeEvent.timestamp))
                }
              />
            )}
          </View>

          <View>
            <Text style={styles.textRadioBottom}>Qual é o seu Peso? </Text>
            <SliderRange
              data={weight}
              unitType="kg"
              step={1}
              maximumValue={300}
              onChange={event => setWeight(event)}
            />
          </View>

          <View>
            <Text style={styles.textRadioBottom}>Qual é a sua Altura? </Text>
            <SliderRange
              data={height}
              unitType="cm"
              step={1}
              maximumValue={300}
              onChange={event => setHeight(event)}
            />
          </View>

          <View style={{ alignItems: 'flex-start' }}>
            <Text style={styles.radioButtonTitle}>
              Qual é o seu Biotipo Físico?
            </Text>

            <RadioGroup
              radioButtons={_rbCorporalBiotype}
              onPress={event => {
                console.log(event);
                // _onPressRBCorporalBiotype;
              }}
              layout="column"
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.radioButtonTitle}>Qual é o seu Gênero?</Text>
            <RadioGroup
              radioButtons={_rbGender}
              onPress={_onPressRBGender}
              layout="row"
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.radioButtonTitle}>
              O que você gostaria de fazer com seu peso?
            </Text>
            <RadioGroup
              radioButtons={_rbObjectivePhysical}
              onPress={_onPressRBObjectivePhysical}
              layout="row"
            />
          </View>

          <View>
            <Text style={styles.textRadioBottom}>
              Quanto tempo de exercicio?
            </Text>
            <SliderRange
              data={exercisetime}
              unitType="h"
              step={0.5}
              maximumValue={24}
              onChange={event => setExerciseTime(event)}
            />
          </View>

          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() => submitAnalysis()}
          >
            <Text style={styles.submitText}>Cadastrar dados</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
