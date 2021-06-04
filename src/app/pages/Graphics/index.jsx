import React, { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import {
  Container,
  TitleMain,
  Text,
  SafeAreaViewStyle,
  TextMain,
} from './style';
import { LineChart } from 'react-native-chart-kit';

import api from '../../services/api';
import AuthContext from '../../contexts/auth';
import UpdateInfoContext from '../../contexts/updateInfo';

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

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#fff',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(255,167,38, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
export default function Graphics() {
  const { signOut } = useContext(AuthContext);
  const { update } = useContext(UpdateInfoContext);
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
  }, [update]);

  const data = [5, 10, 15, 20, 25, 32]; //dia do m
  const axesSvg = { fontSize: 10, fill: 'grey' };
  const verticalContentInset = { top: 10, bottom: 10 };
  const xAxisHeight = 20;

  return (
    <SafeAreaView style={SafeAreaViewStyle}>
      <ScrollView>
        <Container>
          <TitleMain>Gráficos</TitleMain>
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
              chartConfig={chartConfig}
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
              chartConfig={chartConfig}
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
