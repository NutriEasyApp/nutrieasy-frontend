import React, { useEffect, useState, useContext } from 'react';
import { View, ScrollView, SafeAreaView, Image } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { Tooltip } from 'react-native-elements';

import { SliderRange } from '../../components/Slider/SliderRange';

import AuthContext from '../../contexts/auth';
import UpdateInfoContext from '../../contexts/updateInfo';

import api from '../../services/api';

import {
  Container,
  Title,
  Label,
  Button,
  Text,
  SafeAreaViewStyle,
  CalendarMonthStyle,
  DateInputStyle,
  RadioButtonGroupStyle,
  Calendar,
  BirthDate,
  SliderRangeLabel,
  ValueRadioButton,
  Flex,
  Radio,
  ImgBodytype,
  TextTooltip,
  TitleTooltip,
} from './style';

const EctomorfoF = require('../../assets/images/Ectomorfo-f-3.png');
const EctomorfoM = require('../../assets/images/Ectomorfo-m-3.png');
const EndomorfoF = require('../../assets/images/Endomorfo-f-3.png');
const EndomorfoM = require('../../assets/images/Endomorfo-m-3.png');
const MesomorfoF = require('../../assets/images/Mesomorfo-f-3.png');
const MesomorfoM = require('../../assets/images/Mesomorfo-m-3.png');

function FormatStringDateBrToEua(data) {
  var dia = data.split('-')[0];
  var mes = data.split('-')[1];
  var ano = data.split('-')[2];
  const date = ano + '-' + ('0' + mes).slice(-2) + '-' + ('0' + dia).slice(-2);
  return date;
}

function FormatStringDateEuaToBr(data) {
  var dia = data.split('-')[0];
  var mes = data.split('-')[1];
  var ano = data.split('-')[2];

  return ano + '-' + mes + '-' + dia;
}

const userDataAnalysis = {
  weight: '',
  height: '',
  genre: '',
  birthdate: '',
  bodytype: '',
  objective: '',
  exercisetime: '',
  meals: '',
};

export default function HealthAnalysis({ navigation }) {
  const { signed, user, signOut } = useContext(AuthContext);
  const { update, updateInfo } = useContext(UpdateInfoContext);
  const [genre, setGenre] = React.useState('');
  const [objective, setObjective] = React.useState('');
  const [bodytype, setBodytype] = React.useState('');
  const [date, setDate] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [exercisetime, setExerciseTime] = useState(0);
  const [meals, setMeals] = useState('');

  const postHealth = async () => {
    const user = await AsyncStorage.getItem('@RNAuth:user');
    try {
      await api.post('/health', {
        id_user: `${user}`,
        genre: String(genre),
        height: String(height),
        weight: String(weight),
        birthdate: String(FormatStringDateBrToEua(date)),
        bodytype: String(bodytype),
        objective: String(objective),
        exercisetime: String(exercisetime),
        meals: String(meals),
      });
      updateInfo();
      navigation.navigate('Home');
    } catch (err) {
      console.log('Ocorreu um erro: ', err);

      return signOut();
    }
  };

  const [result, setResult] = useState(userDataAnalysis);
  useEffect(() => {
    async function getHealth() {
      try {
        const user = await AsyncStorage.getItem('@RNAuth:user');
        const result = await api.get(`/health/${user}`);
        setDate(FormatStringDateEuaToBr(result.data.birthdate));
        setGenre(result.data.genre);
        setWeight(result.data.weight);
        setHeight(result.data.height);
        setObjective(result.data.objective);
        setBodytype(result.data.bodytype);
        setExerciseTime(result.data.exercisetime);
        setMeals(result.data.meals);
      } catch (err) {
        const { status } = err.response;
        if (status === 404) {
          console.log('Parece que você ainda não cadastrou sua ficha de saude');
          return;
        }
        // if (status === 401) {
        return signOut();
        // }
      }
    }
    getHealth();
  }, [update]);

  return (
    <SafeAreaView style={SafeAreaViewStyle}>
      <ScrollView>
        <Container>
          <Title>Ficha de Análise de Saúde</Title>
          <View>
            <Label>Qual é a sua Data de Nascimento?</Label>
            <BirthDate>
              <TextInputMask
                type={'datetime'}
                options={{
                  format: 'DD-MM-YYYY',
                }}
                value={date}
                placeholder="DD-MM-AAAA"
                onChangeText={event => setDate(event)}
                style={DateInputStyle}
              />

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
            <Label>Quanto tempo de exercicio você pratica por dia?</Label>
            <SliderRange
              data={exercisetime}
              unitType="h"
              step={0.5}
              minimumValue={0}
              maximumValue={8}
              onChange={event => setExerciseTime(event)}
            />
          </View>

          <View>
            <Label>Quantas refeições você faz por dia?</Label>
            <SliderRange
              data={meals}
              unitType="qtd"
              step={1}
              minimumValue={2}
              maximumValue={5}
              onChange={event => setMeals(event)}
            />
          </View>

          <View style={Flex}>
            <Label>Qual é o seu Gênero?</Label>
            <RadioButton.Group
              onValueChange={event => setGenre(event)}
              value={genre}
              style={RadioButtonGroupStyle}
            >
              <Radio>
                <RadioButton value="M" color="#fb9300" />
                <ValueRadioButton>Masculino</ValueRadioButton>
              </Radio>
              <Radio>
                <RadioButton value="F" color="#fb9300" />
                <ValueRadioButton>Feminino</ValueRadioButton>
              </Radio>
            </RadioButton.Group>
          </View>

          {genre == 'M' ? (
            <ImgBodytype>
              <Label>Qual é o seu Biotipo Físico?</Label>
              <Image source={EctomorfoM} />
              <Image source={EndomorfoM} />
              <Image source={MesomorfoM} />

              <View style={{ justifyContent: 'flex-end' }}>
                <Tooltip
                  backgroundColor={'#fb9300'}
                  height={190}
                  width={230}
                  popover={
                    <TextTooltip>
                      O biotipo é a forma física que tem o corpo do ser humano,
                      sendo determinado por alguns fatores que variam de pessoa
                      para a pessoa. Os que são relevantes ao considerar os
                      biotipos são: constituição dos ossos, massa muscular e
                      metabolismo.
                    </TextTooltip>
                  }
                >
                  <MaterialCommunityIcons
                    name="help-circle"
                    color={'#90cc0c'}
                    size={35}
                  />
                  <TitleTooltip>Ajuda</TitleTooltip>
                </Tooltip>
              </View>
            </ImgBodytype>
          ) : (
            <ImgBodytype>
              <Label>Qual é o seu Biotipo Físico?</Label>
              <Image source={EctomorfoF} />
              <Image source={EndomorfoF} />
              <Image source={MesomorfoF} />

              <View style={{ justifyContent: 'flex-end' }}>
                <Tooltip
                  backgroundColor={'#fb9300'}
                  height={190}
                  width={230}
                  popover={
                    <TextTooltip>
                      O biotipo é a forma física que tem o corpo do ser humano,
                      sendo determinado por alguns fatores que variam de pessoa
                      para a pessoa. Os que são relevantes ao considerar os
                      biotipos são: constituição dos ossos, massa muscular e
                      metabolismo.
                    </TextTooltip>
                  }
                >
                  <MaterialCommunityIcons
                    name="help-circle"
                    color={'#90cc0c'}
                    size={35}
                  />
                  <TitleTooltip>Ajuda</TitleTooltip>
                </Tooltip>
              </View>
            </ImgBodytype>
          )}

          <View>
            <RadioButton.Group
              onValueChange={event => setBodytype(event)}
              value={bodytype}
              style={RadioButtonGroupStyle}
            >
              <Radio>
                <RadioButton value="ECTOMORPH" color="#fb9300" />
                <ValueRadioButton>1- Ectomorfo</ValueRadioButton>
              </Radio>
              <Radio>
                <RadioButton value="ENDOMORPH" color="#fb9300" />
                <ValueRadioButton>2- Endomorfo</ValueRadioButton>
              </Radio>
              <Radio>
                <RadioButton value="MESOMORPH" color="#fb9300" />
                <ValueRadioButton>3- Mesomorfo</ValueRadioButton>
              </Radio>
            </RadioButton.Group>
          </View>

          <View>
            <Label>O que você gostaria de fazer com seu peso?</Label>
            <RadioButton.Group
              onValueChange={event => setObjective(event)}
              value={objective}
              style={RadioButtonGroupStyle}
            >
              <Radio>
                <RadioButton value="GAIN" color="#fb9300" />
                <ValueRadioButton>Ganhar</ValueRadioButton>
              </Radio>
              <Radio>
                <RadioButton value="LOSE" color="#fb9300" />
                <ValueRadioButton>Perder</ValueRadioButton>
              </Radio>
              <Radio>
                <RadioButton value="KEEP" color="#fb9300" />
                <ValueRadioButton>Manter</ValueRadioButton>
              </Radio>
            </RadioButton.Group>
          </View>

          <Button onPress={postHealth}>
            <Text>Cadastrar dados</Text>
          </Button>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
