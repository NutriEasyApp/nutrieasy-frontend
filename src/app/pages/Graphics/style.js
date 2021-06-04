import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const Container = styled.View`
  display: flex;
  justify-content: center;
  padding: 25px 10px;
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

export const TitleMain = styled.Text`
  font-size: 30px;
  text-align: center;
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
  backgroundColor: "white",
  paddingTop: StatusBar.currentHeight,
};

export const TextMain = styled.Text`
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  font-weight: 200;
  width: 100%;
  margin-bottom: 10px;
  color: gray;
`;