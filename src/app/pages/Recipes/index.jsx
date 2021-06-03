import React, { useEffect, useState, useContext } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Content,
  Info,
  TitleMain,
  Icon,
  InfoText,
  Wrapper,
  Value,
  TitleElement,
  TextMain,
  SafeAreaViewStyle,
} from './style';

import api from '../../services/api';
import AuthContext from '../../contexts/auth';

const dietData = {
  diet: {
    diet: {
      calories: '',
      carbohydrates: '',
      lipids: '',
      meals: '',
      protein: '',
      water: '',
    },
    dietPerMeal: {
      calories: '',
      carbohydrates: '',
      lipids: '',
      protein: '',
      water: '',
    },
  },
};
export default function Recipes() {
  const { signed, user, signOut } = useContext(AuthContext);
  const [proposed, setProposed] = useState(dietData);
  const [diet, setDiet] = useState(false);

  useEffect(() => {
    async function getDiet() {
      try {
        const user = await AsyncStorage.getItem('@RNAuth:user');
        const response = await api.get(`/diet/${user}`);
        setProposed(response.data);
        setDiet(true);
      } catch (err) {
        const { status } = err.response;
        if (status === 404) {
          return setDiet(false);
        }
        // if (status === 401) {
        return signOut();
        // }
      }
    }
    getDiet();
  }, []);

  return (
    <SafeAreaView style={SafeAreaViewStyle}>
      <ScrollView>
        <Container>
          <TitleMain>Divisão de Refeições</TitleMain>
          <TextMain>
            O objetivo dessa divisão é fornecer números adequados dos nutrientes
            para cada montante de refeição, seja ela durante o dia ou um total
            por refeições.
          </TextMain>

          <Wrapper>
            {diet ? (
              <>
                <Icon>
                  <MaterialCommunityIcons
                    name="calendar-today"
                    color={'#90cc0c'}
                    size={65}
                  />
                </Icon>

                <TitleElement>Montante Nutricional por dia:</TitleElement>

                <Content>
                  <View>
                    <Info>
                      <InfoText>
                        Água: <Value>{proposed.diet.diet.water}</Value>
                      </InfoText>
                      <InfoText>
                        Proteína: <Value>{proposed.diet.diet.protein}</Value>
                      </InfoText>
                      <InfoText>
                        Caboidratos:{' '}
                        <Value>{proposed.diet.diet.carbohydrates}</Value>
                      </InfoText>
                      <InfoText>
                        Lípidios: <Value>{proposed.diet.diet.lipids}</Value>
                      </InfoText>
                      <InfoText>
                        Calorias: <Value>{proposed.diet.diet.calories}</Value>
                      </InfoText>
                    </Info>
                  </View>
                </Content>
              </>
            ) : (
              <>
                <Value>
                  Parece que você ainda não cadastrou sua ficha de saúde.
                </Value>
              </>
            )}
          </Wrapper>

          <Wrapper style={{ marginTop: 40 }}>
            {diet ? (
              <>
                <Icon>
                  <MaterialCommunityIcons
                    name="noodles"
                    color={'#90cc0c'}
                    size={65}
                  />
                </Icon>
                <TitleElement>Montante Nutricional por refeições:</TitleElement>
                <Content>
                  <View>
                    <Info>
                      <InfoText>
                        Água: <Value>{proposed.diet.dietPerMeal.water}</Value>
                      </InfoText>
                      <InfoText>
                        Proteína:{' '}
                        <Value>{proposed.diet.dietPerMeal.protein}</Value>
                      </InfoText>
                      <InfoText>
                        Caboidratos:{' '}
                        <Value>{proposed.diet.dietPerMeal.carbohydrates}</Value>
                      </InfoText>
                      <InfoText>
                        Lípidios:{' '}
                        <Value>{proposed.diet.dietPerMeal.lipids}</Value>
                      </InfoText>
                      <InfoText>
                        Calorias:{' '}
                        <Value>{proposed.diet.dietPerMeal.calories}</Value>
                      </InfoText>
                    </Info>
                  </View>
                </Content>
              </>
            ) : (
              <>
                <Value>
                  Parece que você ainda não cadastrou sua ficha de saúde.
                </Value>
              </>
            )}
          </Wrapper>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
