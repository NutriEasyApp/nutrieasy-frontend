import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 10px;
`;

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
  padding-bottom: 50px;
  margin-top: 0;
`;

export const Text = styled.Text`
  font-size: 16px;
  line-height: 25px;
  text-align: justify;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Back = styled.View`
  padding: 10px 0;
  align-self: stretch;
  margin-left: 30px;
`;

export const SafeAreaViewStyle = {
  flex: 1,
  backgroundColor: '#fff',
  paddingTop: StatusBar.currentHeight,
  paddingRight: 10,
  paddingLeft: 10,
};
