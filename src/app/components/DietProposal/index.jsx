import React, { useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Title,
  Description,
  Info,
  Text,
  CardHeader,
  Card,
  Content,
  Proposta,
} from './styles';

import api from '../../services/api';
import AuthContext from '../../contexts/auth';

const dietData = {
  diet: {
    diet: {
      calories: '',
      carbohydrates: '',
      protein: '',
      lipids: '',
      water: '',
    },
  },
};

import Menu from '../../components/Menu';

export default function DietProposal() {
  const { signOut } = useContext(AuthContext);
  const [proposed, setProposed] = useState(dietData);
  const [diet, setDiet] = useState(false);

  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

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
          //console.log('Parece que você ainda não cadastrou sua ficha de saude');
          return setDiet(false);
        }
        signOut();
      }
    }
    getDiet();
  }, []);

  return (
    <Container>
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-300, 0, 260],
                    outputRange: [-50, 0, 260],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            {
              <CardHeader>
                <MaterialCommunityIcons
                  name="nutrition"
                  size={28}
                  color="#666"
                />
                <MaterialCommunityIcons
                  name="chart-bar"
                  size={28}
                  color="#666"
                />
              </CardHeader>
            }

            <Proposta>
              <Title>Proposta de Dieta / Dia</Title>
              {diet ? (
                <>
                  <Description>
                    Calorias: {proposed.diet.diet.calories}cal
                  </Description>
                  <Description>
                    Carboidratos: {proposed.diet.diet.carbohydrates}g
                  </Description>
                  <Description>
                    Proteina: {proposed.diet.diet.protein}g
                  </Description>
                  <Description>
                    Lipídios: {proposed.diet.diet.lipids}g
                  </Description>
                  <Description>Água: {proposed.diet.diet.water}ml</Description>
                </>
              ) : (
                <>
                  <Description>
                    Parece que você ainda não cadastrou sua ficha de saúde.
                  </Description>
                </>
              )}
            </Proposta>

            <Info>
              <Text>
                Essa é a sua proposta de dieta conforme os dados enviados pela
                ficha de ánalise de saúde.
              </Text>
            </Info>
          </Card>
        </PanGestureHandler>
      </Content>
    </Container>
  );
}
