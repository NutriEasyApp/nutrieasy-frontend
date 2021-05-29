import React, { useEffect, useState, useContext } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { SliderRange } from '../../components/Slider/SliderRange';

import AuthContext from '../../contexts/auth';
import api from '../../services/api';

import {
  Container,
  Title,
  Label,
  Button,
  Text,
  DateInput,
  SafeAreaViewStyle,
  CalendarMonthStyle,
  Calendar,
  BirthDate,
  SliderRangeLabel,
} from './style';


const genreTypes = [
  {
    id: '1',
    label: 'Masculino',
    value: 'M',
    selected: false
  },
  {
    id: '2',
    label: 'Feminino',
    value: 'F',
    selected: true
  },
];

const physicalBiotypeTypes = [
  {
    id: '1',
    label: 'Ectomorfo',
    value: 'ECTOMORPH',
    description: 'Ganha e perde massa rapido',
    selected: false
  },
  {
    id: '2',
    label: 'Endomorfo',
    value: 'ENDOMORPH',
    selected: true
  },
  {
    id: '3',
    label: 'Mesomorfo',
    value: 'MESOMORPH',
    selected: false
  },
];

const physicalObjectiveType = [
  {
    id: '1',
    label: 'Ganhar',
    value: 'GAIN',
    selected: false
  },
  {
    id: '2',
    label: 'Perder',
    value: 'LOSE',
    selected: true
  },
  {
    id: '3',
    label: 'Manter',
    value: 'KEEP',
    selected: false
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

export default function HealthAnalysis({ navigation }) {
  const { signed, user, signOut } = useContext(AuthContext);

  const [selected, setSelected] = useState(true);

  const [date, setDate] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [corporalBiotype, setCorporalBiotype] = useState('');
  const [eatingHabits, setEatingHabits] = useState('');
  const [genre, setGender] = useState('');
  const [objective, setObjective] = useState('');
  const [bodytype, setBodytype] = useState('');
  const [exercisetime, setExerciseTime] = useState('');
  const [objectivePhysical, setObjectivePhysical] = useState('');

  /* Radio Button - Variables */
  const [_rbGender, set_rbGender] = useState(genreTypes);
  const [_rbCorporalBiotype, set_rbCorporalBiotype] = useState(
    physicalBiotypeTypes
  );
  const [_rbObjectivePhysical, set_rbObjectivePhysical] = useState(
    physicalObjectiveType
  );
  const [_rbEatingHabits, set_rbEatingHabits] = useState(eatingHabitsTypes);

  /* Radio Button - Functions */
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

  const submitAnalysis = async () => {
    const user = await AsyncStorage.getItem('@RNAuth:user');
    try {
      await api.post('/health', {
        id_user: '2f0e70b7-ba85-414e-ac8b-07788273f177',
        genre: 'M',
        height: '175',
        weight: '70',
        birthdate: '1999-04-18',
        bodytype: 'ECTOMORPH',
        objective: 'GAIN',
        exercisetime: '6.0',
        meals: '3',
      });

      navigation.navigate('Home');
    } catch (err) {
      console.log('Ocorreu um erro: ', err);
    }
  };

  const [result, setResult] = useState(userDataAnalysis);

  useEffect(() => {
    async function getHealth() {
      try {
        const user = await AsyncStorage.getItem('@RNAuth:user');
        const result = await api.get(`/health/${user}`);
        setGender(result.data.genre);
        setWeight(result.data.weight);
        setHeight(result.data.height);
        setObjective(result.data.objective);
        setBodytype(result.data.bodytype);
        setExerciseTime(result.data.exercisetime);
      } catch (err) {
        const { status } = err.response;
        if (status === 404) {
          console.log('Parece que você ainda não cadastrou sua ficha de saude');
        }
        if (status === 401) {
          signOut();
        }
      }
    }
    getHealth();
  }, []);

  return (
    <SafeAreaView style={SafeAreaViewStyle}>
      <ScrollView>
        <Container>
          <Title>Ficha de Análise de Saúde</Title>

          <View>
            <Label>Qual é a sua Data de Nascimento?</Label>

            <BirthDate>
              <DateInput
                placeholder="DD-MM-AAAA"
                onChange={event =>
                  setDate(event.nativeEvent.text.split('-').reverse().join('-'))
                }
                keyboardType={'numeric'}
                maxLength={10}
              ></DateInput>

              <Calendar>
                <MaterialCommunityIcons
                  name="calendar-month"
                  color={'#000'}
                  size={30}
                  style={CalendarMonthStyle}
                />
              </Calendar>
            </BirthDate>
          </View>

          <View>
            <SliderRangeLabel>Qual é o seu Peso? </SliderRangeLabel>
            <SliderRange
              data={weight}
              unitType="kg"
              step={1}
              maximumValue={300}
              onChange={event => setWeight(event)}
            />
          </View>

          <View>
            <SliderRangeLabel>Qual é a sua Altura? </SliderRangeLabel>
            <SliderRange
              data={height}
              unitType="cm"
              step={1}
              maximumValue={300}
              onChange={event => setHeight(event)}
            />
          </View>

          <View>
            <Label>Qual é o seu Biotipo Físico?</Label>
            <RadioGroup
              radioButtons={_rbCorporalBiotype}
              onPress={_onPressRBCorporalBiotype}
              layout="row"
              
            />
          </View>

          <View>
            <Label>Qual é o seu Gênero?</Label>
            <RadioGroup
              radioButtons={_rbGender}
              onPress={_onPressRBGender}
              layout="row"
            />
          </View>

          <View>
            <Label>O que você gostaria de fazer com seu peso?</Label>
            <RadioGroup
              radioButtons={_rbObjectivePhysical}
              onPress={_onPressRBObjectivePhysical}
              layout="row"
            />
          </View>

          <View>
            <Label>Quanto tempo de exercicio?</Label>
            <SliderRange
              data={exercisetime}
              unitType="h"
              step={0.5}
              maximumValue={24}
              onChange={event => setExerciseTime(event)}
            />
          </View>

          <Button onPress={submitAnalysis}>
            <Text>Cadastrar dados</Text>
          </Button>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
