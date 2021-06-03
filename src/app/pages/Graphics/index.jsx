import React, { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { Container, Title, Text, SafeAreaViewStyle } from './style';
import { LineChart } from 'react-native-chart-kit';

import api from '../../services/api';
import AuthContext from '../../contexts/auth';
function convertDateStringToBRFormat(dateString) {
  let date = new Date(dateString);
  let year = date.getFullYear();

  (month = ('0' + (date.getMonth() + 1)).slice(-2)),
    (day = ('0' + date.getDate()).slice(-2));

  return [day, month, year].join('/');
}

const historyHealthData = {
  _id: '',
  history: [
    {
      _id: '',
      date: '',
      weight: '',
      exercisetime: '',
    },
  ],
  __v: '',
};
export default function Graphics() {
  const { signOut } = useContext(AuthContext);
  const [proposed, setProposed] = useState(historyHealthData);
  const [weight, setWeight] = useState([1, 1, 1, 1, 1, 1]);
  const [exercisetime, setExercisetime] = useState([1, 1, 1, 1, 1, 1]);
  //["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"]
  const [date, setDate] = useState([' ', ' ', ' ', ' ', ' ', ' ']);

  useEffect(() => {
    async function getHistoryHealth() {
      try {
        const user = await AsyncStorage.getItem('@RNAuth:user');
        const response = await api.get(`/health/history-health/${user}`);
        setProposed(response.data);
        setWeight(response.data.history.map(item => parseInt(item.weight)));
        setExercisetime(
          response.data.history.map(item => parseFloat(item.exercisetime))
        );
        setDate(
          response.data.history.map(item =>
            convertDateStringToBRFormat(item.date)
          )
        );
      } catch (err) {
        const { status } = err.response;
        if (status === 404) {
          console.log('Error 404');
          return;
        }
        // if (status === 401) {
        return signOut();
        // }
      }
    }

    /*async function getHistory(){
        
      //setWeight([2,2,2,3,4,5,6])
      //proposed.history.map(item => item.weight)
    }*/
    //getHistory();

    getHistoryHealth();
  }, []);

  const data = [5, 10, 15, 20, 25, 32]; //dia do m
  const axesSvg = { fontSize: 10, fill: 'grey' };
  const verticalContentInset = { top: 10, bottom: 10 };
  const xAxisHeight = 20;

  return (
    <SafeAreaView style={SafeAreaViewStyle}>
      <ScrollView>
        <Container>
          <Title>Gráficos</Title>

          <View>
            <Text>Peso</Text>
            <LineChart
              data={{
                labels: date,
                datasets: [
                  {
                    data: weight,
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={220}
              //yAxisLabel=""
              yAxisSuffix=" kg"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>

          <View>
            <Text>Tempo de Exercício</Text>
            <LineChart
              data={{
                labels: date,
                datasets: [
                  {
                    data: exercisetime,
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={220}
              yAxisLabel=""
              yAxisSuffix=" h"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
