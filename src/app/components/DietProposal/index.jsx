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
  Proposta
} from './styles';

import api from '../../services/api';
import AuthContext from '../../contexts/auth';

const dietData = {
  diet: {
    calories: '',
    carbohydrates: '',
    protein: '',
    lipids: '',
    water: '',
  },
};

export default function DietProposal() {
  const { signOut } = useContext(AuthContext);
  const [diet, setDiet] = useState(dietData);

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
      const user = await AsyncStorage.getItem('@RNAuth:user');
      api.get(`/diet/${user}`).then(response => {
        setDiet(response.data);
      });
    }
    getDiet();
  }, []);

  return (
    <Container>
      <Content>
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-300, 0, 380],
                    outputRange: [-50, 0, 380],
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
            <Title>Proposta de Dieta</Title>
            <Description>Calorias:</Description>
            <Description>Carboidratos: </Description>
            <Description>Proteina: </Description>
            <Description>Lipídios: </Description>
            <Description>Água:</Description>
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
