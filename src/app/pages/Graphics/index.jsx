import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Container, Wrapper, Graph, Title, Text, LineChartStyle, SafeAreaViewStyle } from './style';

import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts';

export default function Graphics() {

  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  const axesSvg = { fontSize: 10, fill: 'grey' };
  const verticalContentInset = { top: 10, bottom: 10 };
  const xAxisHeight = 30;

  return (
    <SafeAreaView style={SafeAreaViewStyle}>
      <ScrollView>
        <Container>
          <Title>Gráficos</Title>
          
          <View>
            <Text>Peso</Text>
            <Wrapper>
              <YAxis
                data={data}
                style={{ marginBottom: xAxisHeight }}
                contentInset={verticalContentInset}
                svg={axesSvg}
              />
              <Graph>
                <LineChart
                  style={LineChartStyle}
                  data={data}
                  contentInset={verticalContentInset}
                  svg={{ stroke: '#FC9401' }}
                >
                  <Grid />
                </LineChart>
                <XAxis
                  style={{ marginHorizontal: -10, height: xAxisHeight }}
                  data={data}
                  formatLabel={(value, index) => index}
                  contentInset={{ left: 10, right: 10 }}
                  svg={axesSvg}
                />
              </Graph>
            </Wrapper>
          </View>
          
          <View>
            <Text>Caloria Total</Text>
            <Wrapper>
              <YAxis
                data={data}
                style={{ marginBottom: xAxisHeight }}
                contentInset={verticalContentInset}
                svg={axesSvg}
              />
              <Graph>
                <LineChart
                  style={LineChartStyle}
                  data={data}
                  contentInset={verticalContentInset}
                  svg={{ stroke: '#FC9401' }}
                >
                  <Grid />
                </LineChart>
                <XAxis
                  style={{ marginHorizontal: -10, height: xAxisHeight }}
                  data={data}
                  formatLabel={(value, index) => index}
                  contentInset={{ left: 10, right: 10 }}
                  svg={axesSvg}
                />
              </Graph>
            </Wrapper>
          </View>
          
          <View>
            <Text>Tempo de Exercício</Text>
            <Wrapper>
              <YAxis
                data={data}
                style={{ marginBottom: xAxisHeight }}
                contentInset={verticalContentInset}
                svg={axesSvg}
              />
              <Graph>
                <LineChart
                  style={LineChartStyle}
                  data={data}
                  contentInset={verticalContentInset}
                  svg={{ stroke: '#FC9401' }}
                >
                  <Grid />
                </LineChart>
                <XAxis
                  style={{ marginHorizontal: -10, height: xAxisHeight }}
                  data={data}
                  formatLabel={(value, index) => index}
                  contentInset={{ left: 10, right: 10 }}
                  svg={axesSvg}
                />
              </Graph>
            </Wrapper>
          </View>
          
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
