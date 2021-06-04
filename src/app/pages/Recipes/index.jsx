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
  WrapperError,
  Message,
} from './style';

import api from '../../services/api';
import AuthContext from '../../contexts/auth';
import UpdateInfoContext from '../../contexts/updateInfo';

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
  const { update } = useContext(UpdateInfoContext);
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
  }, [update]);

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

          {diet ? (
            <>
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
                        Calorias: <Value>{proposed.diet.diet.calories}</Value>
                        cal
                      </InfoText>
                      <InfoText>
                        Carboidratos:{' '}
                        <Value>{proposed.diet.diet.carbohydrates}</Value>g
                      </InfoText>
                      <InfoText>
                        Proteína: <Value>{proposed.diet.diet.protein}</Value>g
                      </InfoText>
                      <InfoText>
                        Lípidios: <Value>{proposed.diet.diet.lipids}</Value>g
                      </InfoText>
                      <InfoText>
                        Água: <Value>{proposed.diet.diet.water}</Value>ml
                      </InfoText>
                    </Info>
                  </View>
                </Content>
              </Wrapper>
            </>
          ) : (
            <>
              <WrapperError>
                <Icon>
                  <MaterialCommunityIcons
                    name="alert"
                    color={'#f02849'}
                    size={45}
                  />
                </Icon>
                <Message>
                  Parece que você ainda não cadastrou sua ficha de saúde.
                </Message>
              </WrapperError>
            </>
          )}

          {diet && (
            <>
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
                        Calorias:{' '}
                        <Value>{proposed.diet.dietPerMeal.calories}</Value>cal
                      </InfoText>
                      <InfoText>
                        Carboidratos:{' '}
                        <Value>{proposed.diet.dietPerMeal.carbohydrates}</Value>
                        g
                      </InfoText>
                      <InfoText>
                        Proteina:{' '}
                        <Value>{proposed.diet.dietPerMeal.protein}</Value>g
                      </InfoText>
                      <InfoText>
                        Lipídios:{' '}
                        <Value>{proposed.diet.dietPerMeal.lipids}</Value>g
                      </InfoText>
                      <InfoText>
                        Água: <Value>{proposed.diet.dietPerMeal.water}</Value>ml
                      </InfoText>
                    </Info>
                  </View>
                </Content>
              </Wrapper>
            </>
          )}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
