import React, { useEffect, useState } from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../services/api';
import logo from '../../../assets/images/logo.png';

import {
  Container,
  Top,
  Logo,
  Title,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Description,
  Annotation,
} from './Home.style';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { statement } from '@babel/template';
import { Button } from 'react-native-web';
import { styles } from '../HealthAnalysis/FormHealthAnalysis.style';

export default function Home() {
  const [diet, setDiet] = useState([]);
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
    api
      .get('/nutrieasy/diet/b06c35b1-9342-467c-a028-23348f9b2a47')
      .then(response => {
        setDiet(response.data);
      });
  }, []);
  return (
    <Container>
      <Top
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 5
        }}
      >
        <Title style={{ color: '#fff', fontSize: 35, fontWeight: '700' }}>NutriEasy App </Title>
      </Top>
      <Icon
        name="keyboard-arrow-down"
        size={35}
        color="#fff"
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
      />
      <Content>
        <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChanged}>
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
            {<CardHeader>
              <MaterialCommunityIcons name="nutrition" size={28} color="#666" />
              <MaterialCommunityIcons name="chart-bar" size={28} color="#666" />
            </CardHeader>}

            <CardContent style={{marginBottom: 30}}>
              <Title style={{fontSize: 26, color: '#000', fontWeight: '700'}}>Proposta de Dieta {diet.calories}</Title>
              <Description style={{fontSize: 20}}>Calorias: {diet.calories}</Description>
              <Description style={{fontSize: 20}}>Carboidratos: {diet.carbohydrates}</Description>
              <Description style={{fontSize: 20}}>Proteina: {diet.protein}</Description>
              <Description style={{fontSize: 20}}>Lipídios: {diet.lipids}</Description>
              <Description style={{fontSize: 20}}>Água: {diet.water}</Description>
            </CardContent>

            <CardFooter>
              <Annotation>
                Essa é a sua proposta de dieta conforme os dados enviados pela ficha de ánalise de saúde.
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
    </Container>
  );
}
