import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 10px;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #000;
  font-weight: 700;
`;

export const Description = styled.Text`
  font-size: 20px;
  margin-top: 3px;
  color: #333;
`;

export const Info = styled.View`
  padding: 20px;
  background: #eee;
  border-radius: 4px;
  bottom: 0;
  position: absolute;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Proposta = styled.View`
  padding: 20px;
`;
