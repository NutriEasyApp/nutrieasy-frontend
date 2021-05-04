import React from 'react';
import { Divisor, Content, Info } from './style';
import {
  PieChart,
  Grid,
  LineChart,
  XAxis,
  YAxis,
} from 'react-native-svg-charts';
import { Text } from 'react-native-svg';
import { Title } from 'react-native-paper';
export default function ReportsIndex() {
  /*BEGIN Grafico 1 */
  const data2 = [
    50,
    10,
    40,
    95,
    -4,
    -24,
    85,
    91,
    35,
    53,
    -53,
    24,
    50,
    -20,
    -80,
  ];
  const axesSvg = { fontSize: 10, fill: 'grey' };
  const verticalContentInset = { top: 10, bottom: 10 };
  const xAxisHeight = 30;

  const Labels = ({ slices, height, width }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <Text
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill={'white'}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={24}
          stroke={'black'}
          strokeWidth={0.2}
        >
          {data.amount}
        </Text>
      );
    });
  };
  /*END  Grafico 1 */

  /* BEGIN Grafico 2 */
  const data = [
    {
      key: 1,
      amount: 50,
      svg: { fill: '#C97600' },
    },
    {
      key: 2,
      amount: 50,
      svg: { fill: '#FC9E19' },
    },
    {
      key: 3,
      amount: 40,
      svg: { fill: '#FC9401' },
    },
    {
      key: 4,
      amount: 95,
      svg: { fill: '#FDB34C' },
    },
    {
      key: 5,
      amount: 35,
      svg: { fill: '#E38400' },
    },
  ];
  /*END  Grafico 2 */

  return (
    <Divisor>
      <Title style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>
        Relatórios
      </Title>
      <Content>
        <YAxis
          data={data2}
          style={{ marginBottom: xAxisHeight }}
          contentInset={verticalContentInset}
          svg={axesSvg}
        />
        <Info>
          <LineChart
            style={{ flex: 1 }}
            data={data2}
            contentInset={verticalContentInset}
            svg={{ stroke: '#FC9401' }}
          >
            <Grid />
          </LineChart>
          <XAxis
            style={{ marginHorizontal: -10, height: xAxisHeight }}
            data={data2}
            formatLabel={(value, index) => index}
            contentInset={{ left: 10, right: 10 }}
            svg={axesSvg}
          />
        </Info>
      </Content>
      <PieChart
        style={{ height: 200 }}
        valueAccessor={({ item }) => item.amount}
        data={data}
        spacing={0}
        outerRadius={'95%'}
      >
        <Labels />
      </PieChart>
    </Divisor>
  );
}
