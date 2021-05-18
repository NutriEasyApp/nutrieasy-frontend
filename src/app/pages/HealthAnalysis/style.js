import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Background = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const Container = styled.View`
  justify-content: center;
  width: 100%;
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 20px;
  align-self: center;
`;

export const RadioButton = styled.Text`
  color: #0000;
`;

export const InputTouchableOpacity = styled.TouchableOpacity`
  background-color: #f9f9f9;
  width: 100%;
  color: #222;
  font-size: 17px;
  border-radius: 7px;
  padding: 5px;
  margin-bottom: 15px;
  border-color: #000;
  border-width: 2px;
`;

export const TextTouchableOpacity = styled.Text`
  margin-left: 5px;
  color: #000;
  font-size: 16px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: 700;
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

export const SafeAreaViewStyle = {
  flex: 1,
  backgroundColor: 'white',
  paddingTop: StatusBar.currentHeight,
};
