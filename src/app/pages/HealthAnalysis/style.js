import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  justify-content: center;
  width: 100%;
  padding: 25px 8px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: 700;
  align-self: center;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 15px;
`;

export const SliderRangeLabel = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: 700;
  margin-top: 5px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #90cc0c;
  width: 100%;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin-top: 20px;
`;

export const DateInput = styled.TextInput`
  background-color: #ececec;
  width: 80%;
  margin-bottom: 15px;
  color: #222;
  font-size: 16px;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  padding: 15px;
  height: 50px;
`;

export const Calendar = styled.View`
  background-color: #ececec;
  border-top-end-radius: 7px;
  border-bottom-right-radius: 7px;
  height: 50px;
`;

export const BirthDate = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SafeAreaViewStyle = {
  flex: 1,
  backgroundColor: '#fff',
  paddingTop: StatusBar.currentHeight,
  paddingRight: 10,
  paddingLeft: 10,
};

export const CalendarMonthStyle = {
  marginTop: 10,
  marginRight: 10,
};
