import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  margin-top: 40px;
  padding-right: 5px;
  padding-left: 5px;
`;

export const Wrapper = styled.View`
  height: 220px;
  padding: 0 20px;
  flex-direction: row;
`;

export const Graph = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const Text = styled.Text`
  padding-right: 25px;
  padding-left: 25px;
  font-size: 17px;
  font-weight: 700;
  margin-top: 10px;
`;

export const LineChartStyle = {
  flex: 1,
};

export const SafeAreaViewStyle = {
  flex: 1,
  backgroundColor: 'white',
  paddingTop: StatusBar.currentHeight,
};
