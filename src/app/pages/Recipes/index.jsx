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

const mealDivisionData = {
  water: '',
  protein: '',
  carbohydrates: '',
  lipids: '',
  fats: '',
};
export default function Recipes() {
  const { signed, user, signOut } = useContext(AuthContext);
  const [mealDivision, setMealDivision] = useState(mealDivisionData);

  useEffect(() => {
    async function getMealDivision() {
      try {
        const user = await AsyncStorage.getItem('@RNAuth:user');
        const response = await api.get(`/mealDivision/${user}`);
        setMealDivision(response.data);
      } catch (err) {
        const { status } = err.response;
        if (status === 401) {
          signOut();
        }
      }
    }
    getMealDivision();
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
                    Água: <Value>{mealDivision.water}</Value>
                  </InfoText>
                  <InfoText>
                    Proteína: <Value>{mealDivision.protein}</Value>
                  </InfoText>
                  <InfoText>
                    Caboidratos: <Value>{mealDivision.carbohydrates}</Value>
                  </InfoText>
                  <InfoText>
                    Lípidios: <Value>{mealDivision.lipids}</Value>
                  </InfoText>
                  <InfoText>
                    Gorduras: <Value>{mealDivision.fats}</Value>
                  </InfoText>
                </Info>
              </View>
            </Content>
          </Wrapper>

          <Wrapper style={{ marginTop: 40 }}>
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
                    Água: <Value>{mealDivision.water}</Value>
                  </InfoText>
                  <InfoText>
                    Proteína: <Value>{mealDivision.protein}</Value>
                  </InfoText>
                  <InfoText>
                    Caboidratos: <Value>{mealDivision.carbohydrates}</Value>
                  </InfoText>
                  <InfoText>
                    Lípidios: <Value>{mealDivision.lipids}</Value>
                  </InfoText>
                  <InfoText>
                    Gorduras: <Value>{mealDivision.fats}</Value>
                  </InfoText>
                </Info>
              </View>
            </Content>
          </Wrapper>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
